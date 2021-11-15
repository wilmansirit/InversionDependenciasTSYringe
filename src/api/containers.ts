import { container } from "tsyringe";
import { ConnectionOptions } from "typeorm";
import { DatabaseConfiguration, DatabaseConnection } from "../database";
import { DatabaseConnectionInterface } from "../interfaces";
import { UserRepository } from "../repositories/user.repository";
import {
  UserDBService,
  UserInternetService,
  UserLocalService,
} from "../services";

// re-export the container, so people must import this file
// and not accidentally get `container' directly from tsyringe
// https://dev.to/leehambley/using-tsyringe-for-dependency-injection-without-using-the-class-syntax-29h7
export { container };

// Services
export const userLocalServiceContainer = container
  .createChildContainer()
  .register("UserService", { useClass: UserLocalService });

export const userDBServiceContainer = container
  .createChildContainer()
  .register("UserService", { useClass: UserDBService });

export const userInternetServiceContainer = container
  .createChildContainer()
  .register<UserInternetService>("UserService", { useClass: UserInternetService });


// Repositories
export const userDBRepositoryContainer = container.register("UserRepository", {
  useClass: UserRepository,
});

// Database
export { DatabaseConnection };
container.register<DatabaseConnectionInterface>("DatabaseConnection", { useClass: DatabaseConnection })

export { DatabaseConfiguration };
container.register<ConnectionOptions>("DatabaseConfiguration", {
  useValue: DatabaseConfiguration,
});
