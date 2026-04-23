import { index, int, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
import { pacientes } from "./pacientes";
import { usuarios } from "./usuarios";

export const prontuario = mysqlTable(
  "prontuario",
  {
    id_prontuario: int("id_prontuario").autoincrement().primaryKey(),
    id_paciente: varchar("id_paciente", { length: 36 })
      .notNull()
      .references(() => pacientes.id_paciente, { onDelete: "restrict", onUpdate: "cascade" }),
    id_usuario: varchar("id_usuario", { length: 11 })
      .notNull()
      .references(() => usuarios.id_usuario, { onDelete: "restrict", onUpdate: "cascade" }),
    anamnese: text("anamnese").notNull(),
    criado_em: timestamp("criado_em", { mode: "date" }).notNull().defaultNow(),
    atualizado_em: timestamp("atualizado_em", { mode: "date" })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => ({
    prontuarioPacienteIdx: index("prontuario_paciente_idx").on(table.id_paciente),
    prontuarioUsuarioIdx: index("prontuario_usuario_idx").on(table.id_usuario),
  }),
);

export type Prontuario = typeof prontuario.$inferSelect;
export type NovoProntuario = typeof prontuario.$inferInsert;
