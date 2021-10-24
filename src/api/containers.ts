import { container } from "tsyringe";
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
export const userDBRepositoryContainer = container
.register("UserRepository", {
  useClass: UserRepository,});
