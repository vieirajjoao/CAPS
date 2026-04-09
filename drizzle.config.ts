import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// Se ja vier uma URL pronta, o Drizzle usa ela direto.
const databaseUrl = process.env.DATABASE_URL?.trim();

export default defineConfig({
  // Aqui o kit le todos os schemas da pasta padrao do projeto.
  schema: "./src/db/schema/*.ts",
  out: "./drizzle",
  dialect: "mysql",
  // Fallback simples: URL unica ou campos separados, os 2 jeitos funcionam.
  dbCredentials: databaseUrl
    ? {
        url: databaseUrl,
      }
    : {
        host: process.env.DB_HOST ?? "localhost",
        port: Number(process.env.DB_PORT ?? "3307"),
        user: process.env.DB_USER ?? "root",
        password: process.env.DB_PASSWORD ?? "",
        database: process.env.DB_NAME ?? "caps",
      },
});
