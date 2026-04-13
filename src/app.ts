import express, { type Request, type Response } from "express";
import { errorHandler } from "./core/middlewares/error-handler";
import { notFoundHandler } from "./core/middlewares/not-found-handler";

export const app = express();

// Ja deixa o body em JSON pronto pra n repetir isso nas rotas.
app.use(express.json());

// Rota base so pra bater o olho e ver se a API subiu.
app.get("/", (_request: Request, response: Response) => {
  response.status(200).json({
    message: "CAPS API",
    status: "running",
  });
});

// Healthcheck mais direto, bom pra teste e monitoramento rapido.
app.get("/health", (_request: Request, response: Response) => {
  response.status(200).json({
    service: "caps-api",
    status: "ok",
  });
});

// Primeiro trata rota faltando, depois cai no handler global de erro.
app.use(notFoundHandler);
app.use(errorHandler);
