import express from "express";
import { config } from "./app/config/configuration";
import connection from "./app/database/connection";
import { apiRouter } from "./app/api/app.routes";

const app = express();

const port: number = config.server.port;

connection();

app.use(express.json());

// Routes
app.use(`/${config.server.apiPrefix}`, apiRouter);

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}/${config.server.apiPrefix}`
  );
});
