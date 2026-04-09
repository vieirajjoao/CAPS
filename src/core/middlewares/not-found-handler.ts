import { type NextFunction, type Request, type Response } from "express";
import { AppError } from "../errors/app-error";

// Qualquer rota que passou batido cai aqui e volta 404 padrao.
export const notFoundHandler = (
  request: Request,
  _response: Response,
  next: NextFunction,
): void => {
  next(new AppError(`Route ${request.method} ${request.originalUrl} not found`, 404));
};
