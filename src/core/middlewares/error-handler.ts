import { type NextFunction, type Request, type Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/app-error";

// Esse cara centraliza a saida de erro pra resposta ficar padronizada.
export const errorHandler = (
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void => {
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      error: error.message,
    });
    return;
  }

  if (error instanceof ZodError) {
    response.status(400).json({
      error: "Validation error",
      issues: error.flatten(),
    });
    return;
  }

  response.status(500).json({
    error: "Internal server error",
  });
};
