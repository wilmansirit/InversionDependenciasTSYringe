import "reflect-metadata";
import {
  userDBServiceContainer,
  userLocalServiceContainer,
  userInternetServiceContainer,
  databaseConnectionContainer,
} from "./api/containers";
import { Main } from "./api/main";
import { DatabaseConnection } from "./database";

// userLocalServiceContainer.resolve(Main);
// userInternetServiceContainer.resolve(Main);
userDBServiceContainer.resolve(Main);

const connection = databaseConnectionContainer.resolve(DatabaseConnection);

console.log(connection);

connection.closeConnection();
