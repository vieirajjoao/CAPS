import { date, index, mysqlTable, text, varchar } from "drizzle-orm/mysql-core";

export const pacientes = mysqlTable(
  "pacientes",
  {
    id_paciente: varchar("id_paciente", { length: 36 }).primaryKey(),
    nome_paciente: varchar("nome_paciente", { length: 255 }).notNull(),
    data_nascimento_paciente: date("data_nascimento_paciente").notNull(),
    endereco_paciente: varchar("endereco_paciente", { length: 255 }).notNull(),
    telefone_paciente: varchar("telefone_paciente", { length: 11 }).notNull(),
    convenio_medico_paciente: varchar("convenio_medico_paciente", { length: 40 }).notNull(),
    hf_paciente: text("hf_paciente"),
    hs_paciente: text("hs_paciente"),
  },
  (table) => ({
    pacientesNomeIdx: index("pacientes_nome_idx").on(table.nome_paciente),
    pacientesTelefoneIdx: index("pacientes_telefone_idx").on(table.telefone_paciente),
  }),
);

export type Paciente = typeof pacientes.$inferSelect;
export type NovoPaciente = typeof pacientes.$inferInsert;
