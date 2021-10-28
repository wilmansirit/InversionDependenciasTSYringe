import { container } from "tsyringe";
import { DatabaseConfiguration, DatabaseConnection } from "../database";
import { UserRepository } from "../repositories/user.repository";
import {
  UserDBService,
  UserInternetService,
  UserLocalService,
} from "../services";


// Services
export const userLocalServiceContainer = container
  .createChildContainer()
  .register("UserService", { useClass: UserLocalService });

export const userDBServiceContainer = container
  .createChildContainer()
  .register("UserService", { useClass: UserDBService });

export const userInternetServiceContainer = container
  .createChildContainer()
  .register("UserService", { useClass: UserInternetService });

// Repositories
export const userDBRepositoryContainer = container.register("UserRepository", {useClass: UserRepository,});


// Database
export const databaseConnectionContainer = container.register("databaseConnection", {useClass: DatabaseConnection})
export const databaseConfigurationContainer = container.register("databaseConfiguration", {useValue: DatabaseConfiguration});
