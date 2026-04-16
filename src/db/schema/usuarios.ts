import { pgTable, varchar, pgEnum, text } from "drizzle-orm/pg-core";

// Enum do dominio de usuario; mantido como veio da branch desse modulo.
export const perfilEnum = pgEnum("perfil", ["admin", "médico", "atendente"]);

// Esse schema fica separado do de Consulta pra cada integrante cuidar do seu.
export const usuarios = pgTable("usuarios", {
    cpf: varchar("id_usuario", { length: 11 }).primaryKey(),
    nome: varchar("nome_usuario", { length: 255 }).notNull(),
    email: varchar("email_usuario", { length: 320 }).notNull().unique(),
    senha: varchar("senha_usuario").notNull(),
    perfil: perfilEnum("perfil").notNull(),
    crm: varchar("crm_usuario", { length: 20 }),
});

export type Usuario = typeof usuarios.$inferSelect;
export type NovoUsuario = typeof usuarios.$inferInsert;