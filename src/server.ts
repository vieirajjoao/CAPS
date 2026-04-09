import { env } from "./config/env";
import { app } from "./app";

if (env.NODE_ENV !== "test") {
  const server = app.listen(env.APP_PORT, () => {
    console.log(`CAPS API running on port ${env.APP_PORT}`);
  });

  const shutdown = (): void => {
    server.close(() => {
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}
