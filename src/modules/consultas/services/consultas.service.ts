import { randomUUID } from "node:crypto";
import { AppError } from "../../../core/errors/app-error";
import { type Consulta } from "../../../db/schema";
import { type CreateConsultaInput, type ConsultaQueryInput, type UpdateConsultaStatusInput } from "../consultas.schemas";
import { consultasRepository, type ConsultaComRelacoes } from "../repositories/consultas.repository";

type MysqlErrorLike = {
  code?: string;
};

const isMysqlErrorLike = (error: unknown): error is MysqlErrorLike => {
  return typeof error === "object" && error !== null && "code" in error;
};

const mapDatabaseError = (error: unknown): never => {
  if (isMysqlErrorLike(error) && error.code === "ER_DUP_ENTRY") {
    throw new AppError("Ja existe consulta para este medico no horario informado.", 409);
  }

  if (isMysqlErrorLike(error) && error.code === "ER_NO_REFERENCED_ROW_2") {
    throw new AppError("Paciente ou medico informado nao existe.", 400);
  }

  throw error;
};

export const consultasService = {
  async list(filters: ConsultaQueryInput): Promise<ConsultaComRelacoes[]> {
    return consultasRepository.list(filters);
  },

  async findById(id: string): Promise<ConsultaComRelacoes> {
    const consulta = await consultasRepository.findById(id);

    if (!consulta) {
      throw new AppError("Consulta nao encontrada.", 404);
    }

    return consulta;
  },

  async create(input: CreateConsultaInput): Promise<ConsultaComRelacoes> {
    const patient = await consultasRepository.findPatientById(input.id_paciente);

    if (!patient) {
      throw new AppError("Paciente nao encontrado.", 404);
    }

    const user = await consultasRepository.findUserById(input.id_usuario);

    if (!user) {
      throw new AppError("Usuario responsavel nao encontrado.", 404);
    }

    if (user.perfil !== "medico") {
      throw new AppError("A consulta so pode ser vinculada a um usuario com perfil medico.", 400);
    }

    const conflict = await consultasRepository.findScheduleConflict(input.id_usuario, input.data_hora);

    if (conflict) {
      throw new AppError("Ja existe consulta para este medico no horario informado.", 409);
    }

    try {
      return await consultasRepository.create({
        id_consulta: randomUUID(),
        id_paciente: input.id_paciente,
        id_usuario: input.id_usuario,
        data_hora: input.data_hora,
        obs: input.obs,
      });
    } catch (error: unknown) {
      mapDatabaseError(error);
    }

    throw new Error("Falha inesperada ao criar consulta.");
  },

  async updateStatus(id: string, input: UpdateConsultaStatusInput): Promise<ConsultaComRelacoes> {
    await this.findById(id);

    try {
      const updatedConsulta = await consultasRepository.updateStatus(id, input);

      if (!updatedConsulta) {
        throw new AppError("Consulta nao encontrada.", 404);
      }

      return updatedConsulta;
    } catch (error: unknown) {
      mapDatabaseError(error);
    }

    throw new Error("Falha inesperada ao atualizar status da consulta.");
  },
};
