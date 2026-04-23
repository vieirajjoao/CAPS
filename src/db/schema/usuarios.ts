import { index, mysqlEnum, mysqlTable, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const usuarios = mysqlTable(
  "usuarios",
  {
    // O id do usuario precisa casar com as FKs de consulta e prontuario.
    id_usuario: varchar("id_usuario", { length: 11 }).primaryKey(),
    nome_usuario: varchar("nome_usuario", { length: 255 }).notNull(),
    email_usuario: varchar("email_usuario", { length: 320 }).notNull(),
    senha_usuario: varchar("senha_usuario", { length: 255 }).notNull(),
    perfil: mysqlEnum("perfil", ["admin", "medico", "atendente"]).notNull(),
    crm_usuario: varchar("crm_usuario", { length: 20 }),
  },
  (table) => ({
    usuariosEmailUnique: uniqueIndex("usuarios_email_unique").on(table.email_usuario),
    usuariosPerfilIdx: index("usuarios_perfil_idx").on(table.perfil),
  }),
);

export type Usuario = typeof usuarios.$inferSelect;
export type NovoUsuario = typeof usuarios.$inferInsert;
