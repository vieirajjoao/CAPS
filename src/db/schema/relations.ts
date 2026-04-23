import { relations } from "drizzle-orm";
import { consultas } from "./consultas";
import { pacientes } from "./pacientes";
import { prontuario } from "./prontuario";
import { usuarios } from "./usuarios";

export const usuariosRelations = relations(usuarios, ({ many }) => ({
  consultas: many(consultas),
  prontuarios: many(prontuario),
}));

export const pacientesRelations = relations(pacientes, ({ many }) => ({
  consultas: many(consultas),
  prontuarios: many(prontuario),
}));

export const consultasRelations = relations(consultas, ({ one }) => ({
  paciente: one(pacientes, {
    fields: [consultas.id_paciente],
    references: [pacientes.id_paciente],
  }),
  usuario: one(usuarios, {
    fields: [consultas.id_usuario],
    references: [usuarios.id_usuario],
  }),
}));

export const prontuarioRelations = relations(prontuario, ({ one }) => ({
  paciente: one(pacientes, {
    fields: [prontuario.id_paciente],
    references: [pacientes.id_paciente],
  }),
  usuario: one(usuarios, {
    fields: [prontuario.id_usuario],
    references: [usuarios.id_usuario],
  }),
}));
