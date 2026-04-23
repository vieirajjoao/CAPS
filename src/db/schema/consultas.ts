import { datetime, index, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { pacientes } from "./pacientes";
import { usuarios } from "./usuarios";

export const consultas = mysqlTable(
  "consultas",
  {
    // Bloco principal da consulta: ids, horario e status do atendimento.
    id_consulta: varchar("id_consulta", { length: 36 }).primaryKey(),
    id_paciente: varchar("id_paciente", { length: 36 })
      .notNull()
      .references(() => pacientes.id_paciente, { onDelete: "restrict", onUpdate: "cascade" }),
    id_usuario: varchar("id_usuario", { length: 11 })
      .notNull()
      .references(() => usuarios.id_usuario, { onDelete: "restrict", onUpdate: "cascade" }),
    data_hora: datetime("data_hora", { mode: "date" }).notNull(),
    status: mysqlEnum("status", ["agendada", "concluida", "cancelada"]).notNull().default("agendada"),
    obs: text("obs"),
    // Metadados basicos pra saber quando entrou e quando mudou.
    criado_em: timestamp("criado_em", { mode: "date" }).notNull().defaultNow(),
    atualizado_em: timestamp("atualizado_em", { mode: "date" })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    // Indices simples ajudam nas buscas mais comuns da agenda.
    consultasPacienteIdx: index("consultas_paciente_idx").on(table.id_paciente),
    consultasUsuarioIdx: index("consultas_usuario_idx").on(table.id_usuario),
    consultasDataHoraIdx: index("consultas_data_hora_idx").on(table.data_hora),
    // Regra chave: mesmo medico nao pode ter 2 consultas no msm horario.
    consultasUsuarioDataHoraUnique: uniqueIndex("consultas_usuario_data_hora_unique").on(table.id_usuario, table.data_hora),
  }),
);

// Tipos uteis pro resto da app sem precisar repetir shape manual.
export type Consulta = typeof consultas.$inferSelect;
export type NovaConsulta = typeof consultas.$inferInsert;
