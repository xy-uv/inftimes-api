import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const config = {
  mongoDBUri: process.env.MONGO_DB_URI,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
} as const;

export default config;
