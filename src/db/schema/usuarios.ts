import { pgTable, varchar, pgEnum, text } from "drizzle-orm/pg-core";

export const perfilEnum = pgEnum("perfil", ["admin", "médico", "atendente"]);

export const usuarios = pgTable("usuarios", {
    cpf: varchar("id_usuario", { length: 11 }).primaryKey(),
    nome: varchar("nome_usuario", { length: 255 }).notNull(),
    email: varchar("email_usuario", { length: 320 }).notNull().unique(),
    senha: varchar("senha_usuario").notNull(),
    perfil: perfilEnum("perfil").notNull(),
    crm: varchar("crm_usuario", { length: 20 }),
});