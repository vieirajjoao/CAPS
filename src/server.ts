import express, { type Request, type Response } from "express";
import { env } from "./config/env";

export const app = express();

app.use(express.json());

app.get("/", (_request: Request, response: Response) => {
  response.status(200).json({
    message: "CAPS API",
    branch: "feature/consulta-slurkronox",
    status: "running",
  });
});

app.get("/health", (_request: Request, response: Response) => {
  response.status(200).json({
    service: "caps-api",
    status: "ok",
  });
});

if (env.NODE_ENV !== "test") {
  app.listen(env.APP_PORT, () => {
    console.log(`CAPS API running on port ${env.APP_PORT}`);
  });
}
