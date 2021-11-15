import "reflect-metadata";
import {
  userDBServiceContainer,
  userLocalServiceContainer,
  userInternetServiceContainer,
} from "./api/containers";
import { Main } from "./api/main";


// userLocalServiceContainer.resolve(Main);
// userInternetServiceContainer.resolve(Main);
userDBServiceContainer.resolve(Main);

// const connection = databaseConnectionContainer.resolve(DatabaseConnection);
// const connection = DatabaseConnection
// console.log(connection);

// connection.closeConnection();
