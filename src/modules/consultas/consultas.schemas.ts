import { z } from "zod";

const consultaStatusSchema = z.enum(["agendada", "concluida", "cancelada"]);

// Aqui eu aceito o ISO da data e ja converto pra Date pra nao espalhar parse no service.
const consultaDateTimeSchema = z.coerce.date({
  error: "data_hora precisa ser uma data valida.",
});

export const consultaParamsSchema = z.object({
  id: z.uuid("id da consulta invalido."),
});

export const consultaQuerySchema = z.object({
  id_paciente: z.uuid("id_paciente invalido.").optional(),
  id_usuario: z.string().regex(/^\d{11}$/, "id_usuario precisa ter 11 digitos.").optional(),
  status: consultaStatusSchema.optional(),
});

export const createConsultaSchema = z
  .object({
    id_paciente: z.uuid("id_paciente invalido."),
    id_usuario: z.string().regex(/^\d{11}$/, "id_usuario precisa ter 11 digitos."),
    data_hora: consultaDateTimeSchema,
    obs: z.string().trim().min(1).max(1000).optional(),
  })
  .strict();

export const updateConsultaStatusSchema = z
  .object({
    status: consultaStatusSchema,
    obs: z.string().trim().min(1).max(1000).optional(),
  })
  .strict();

export type ConsultaQueryInput = z.infer<typeof consultaQuerySchema>;
export type CreateConsultaInput = z.infer<typeof createConsultaSchema>;
export type UpdateConsultaStatusInput = z.infer<typeof updateConsultaStatusSchema>;
