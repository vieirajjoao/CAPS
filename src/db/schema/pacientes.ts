import { integer, pgTable, varchar, char,text } from "drizzle-orm/pg-core";

export const pacientes = pgTable("pacientes", {
    nome: varchar("nome_paciente", { length: 255 }).notNull(),
    nascimento: varchar("data_nascimento_paciente", { length: 8 }).notNull(),
    id_paciente: varchar("id_paciente", { length: 36 }).primaryKey(),
    endereco: varchar("endereco_paciente", { length: 255 }).notNull(),
    telefone: char("telefone_paciente", { length: 11 }).notNull(),
    convenio: varchar("convenio_medico_paciente", { length: 40 }).notNull(),
    hf: text("hf_paciente"),
    hs: text("hs_paciente"),

  });