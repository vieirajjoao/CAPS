import "dotenv/config";
import { z } from "zod";

// Valida cedo pra app nao subir com env torta.
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  APP_PORT: z.coerce.number().int().positive().default(3333),
  DATABASE_URL: z.string().min(1).optional(),
  DB_HOST: z.string().min(1).default("localhost"),
  DB_PORT: z.coerce.number().int().positive().default(3307),
  DB_USER: z.string().min(1).default("root"),
  DB_PASSWORD: z.string().default(""),
  DB_NAME: z.string().min(1).default("caps"),
});

const parsedEnv = envSchema.parse(process.env);

// Ja exporta tudo pronto e com a URL tratada sem espaco sobrando.
export const env = {
  ...parsedEnv,
  DATABASE_URL: parsedEnv.DATABASE_URL?.trim() || undefined,
};
