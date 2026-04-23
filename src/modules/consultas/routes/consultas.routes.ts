import { Router } from "express";
import { consultasController } from "../controllers/consultas.controller";

export const consultasRouter = Router();

// O fluxo aqui fica simples: listar, buscar, criar e atualizar status.
consultasRouter.get("/", consultasController.list);
consultasRouter.get("/:id", consultasController.findById);
consultasRouter.post("/", consultasController.create);
consultasRouter.patch("/:id/status", consultasController.updateStatus);
