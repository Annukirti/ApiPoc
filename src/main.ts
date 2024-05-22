import express from "express";
import { config } from "./app/config/configuration";
import connection from "./app/database/connection";
import bodyParser from "body-parser";
import { RegisterRoutes } from "../src/app/api/routes";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "../src/app/api/swagger.json";
import { ErrorHandling } from "./app/common/error-handler";

const app = express();

const port: number = config.server.port;

connection();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

RegisterRoutes(app);

app.use(ErrorHandling.prototype.notFoundHandler);
app.use(ErrorHandling.prototype.validationError);

app.use(
  `/${config.server.apiPrefix}/docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}/${config.server.apiPrefix}`
  );
  console.log(
    `Swagger Link: http://localhost:${port}/${config.server.apiPrefix}/docs`
  );
});
