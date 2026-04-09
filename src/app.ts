import express, { type Request, type Response } from "express";
import { errorHandler } from "./core/middlewares/error-handler";
import { notFoundHandler } from "./core/middlewares/not-found-handler";

export const app = express();

app.use(express.json());

app.get("/", (_request: Request, response: Response) => {
  response.status(200).json({
    message: "CAPS API",
    status: "running",
  });
});

app.get("/health", (_request: Request, response: Response) => {
  response.status(200).json({
    service: "caps-api",
    status: "ok",
  });
});

app.use(notFoundHandler);
app.use(errorHandler);
