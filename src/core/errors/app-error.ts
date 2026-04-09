// Erro de app pra devolver status controlado sem espalhar regra no codigo.
export class AppError extends Error {
  public readonly statusCode: number;

  public constructor(message: string, statusCode = 400) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
  }
}
