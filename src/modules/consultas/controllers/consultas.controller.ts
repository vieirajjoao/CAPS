import { type Request, type Response } from "express";
import { consultaParamsSchema, consultaQuerySchema, createConsultaSchema, updateConsultaStatusSchema } from "../consultas.schemas";
import { consultasService } from "../services/consultas.service";

export const consultasController = {
  async list(request: Request, response: Response): Promise<void> {
    const filters = consultaQuerySchema.parse(request.query);
    const consultas = await consultasService.list(filters);

    response.status(200).json(consultas);
  },

  async findById(request: Request, response: Response): Promise<void> {
    const { id } = consultaParamsSchema.parse(request.params);
    const consulta = await consultasService.findById(id);

    response.status(200).json(consulta);
  },

  async create(request: Request, response: Response): Promise<void> {
    const payload = createConsultaSchema.parse(request.body);
    const consulta = await consultasService.create(payload);

    response.status(201).json(consulta);
  },

  async updateStatus(request: Request, response: Response): Promise<void> {
    const { id } = consultaParamsSchema.parse(request.params);
    const payload = updateConsultaStatusSchema.parse(request.body);
    const consulta = await consultasService.updateStatus(id, payload);

    response.status(200).json(consulta);
  },
};
