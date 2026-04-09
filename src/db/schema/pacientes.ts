import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const pacientes = pgTable("pacientes", {
    nome: varchar("nome_paciente", { length: 255 }).notNull(),
    nascimento: varchar("data_nascimento_paciente", { length: 8 }).notNull(),
    id_paciente: varchar("id_paciente", { length: 36 }).primaryKey(),
    endereco
    telefone
    convenio
    hf
    hs

  });