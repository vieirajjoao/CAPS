import {   integer,   pgTable,   text,   timestamp } from "drizzle-orm/pg-core";

export const prontuario = pgTable('prontuario', {
  id_prontuario: integer('id_prontuario').primaryKey().generatedAlwaysAsIdentity(),

  id_paciente: integer('id_paciente').notNull(),

  id_usuario: integer('id_usuario').notNull(),

  anamnese: text('anamnese').notNull(),

  criado_em: timestamp('criado_em').defaultNow(),

  atualizado_em: timestamp('atualizado_em').defaultNow(),
});