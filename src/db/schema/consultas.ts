import { datetime, index, mysqlEnum, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const consultas = mysqlTable(
  "consultas",
  {
    id_consulta: varchar("id_consulta", { length: 36 }).primaryKey(),
    id_paciente: varchar("id_paciente", { length: 36 }).notNull(),
    id_usuario: varchar("id_usuario", { length: 14 }).notNull(),
    data_hora: datetime("data_hora", { mode: "date" }).notNull(),
    status: mysqlEnum("status", ["agendada", "concluida", "cancelada"]).notNull().default("agendada"),
    obs: text("obs"),
    criado_em: timestamp("criado_em", { mode: "date" }).notNull().defaultNow(),
    atualizado_em: timestamp("atualizado_em", { mode: "date" })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    consultasPacienteIdx: index("consultas_paciente_idx").on(table.id_paciente),
    consultasUsuarioIdx: index("consultas_usuario_idx").on(table.id_usuario),
    consultasDataHoraIdx: index("consultas_data_hora_idx").on(table.data_hora),
    consultasUsuarioDataHoraUnique: uniqueIndex("consultas_usuario_data_hora_unique").on(table.id_usuario, table.data_hora),
  }),
);

export type Consulta = typeof consultas.$inferSelect;
export type NovaConsulta = typeof consultas.$inferInsert;
