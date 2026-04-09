import { env } from "./config/env";
import { app } from "./app";

// Em teste a gente nao sobe porta de verdade, senao atrapalha o runner.
if (env.NODE_ENV !== "test") {
  const server = app.listen(env.APP_PORT, () => {
    console.log(`CAPS API running on port ${env.APP_PORT}`);
  });

  // Fecha o server direitinho antes de encerrar o processo.
  const shutdown = (): void => {
    server.close(() => {
      process.exit(0);
    });
  };

  // Escuta os sinais mais comuns pra evitar desligamento seco.
  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}
