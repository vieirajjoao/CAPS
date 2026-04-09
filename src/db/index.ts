import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { env } from "../config/env";
import * as schema from "./schema";

// Se vier DATABASE_URL usa ela; senao monta a conexao pelo host/porta.
const connection = env.DATABASE_URL
  ? mysql.createPool(env.DATABASE_URL)
  : mysql.createPool({
      host: env.DB_HOST,
      port: env.DB_PORT,
      user: env.DB_USER,
      password: env.DB_PASSWORD,
      database: env.DB_NAME,
    });

// Esse db ja sai tipado com os schemas exportados em ./schema.
export const db = drizzle(connection, { schema, mode: "default" });
export { connection };
