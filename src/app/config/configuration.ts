import dotenv from "dotenv";
dotenv.config();

export const config = {
  server: {
    port: +(process.env.PORT || 8000),
    env: process.env.NODE_ENV || "development",
    apiPrefix: process.env.API_PREFIX || "api",
  },
  database: {
    mongoUri: process.env.MONGO_URI || "",
  },
};
