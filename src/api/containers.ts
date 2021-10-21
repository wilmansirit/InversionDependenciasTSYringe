import { container } from "tsyringe";
import { UserDBService, UserInternetService, UserLocalService } from "../services";

export const userDBServiceContainer = container.createChildContainer().register("UserService", {useClass: UserLocalService});
export const userLocalServiceContainer = container.createChildContainer().register("UserService", {useClass: UserDBService});
export const userInternetServiceContainer = container.createChildContainer().register("UserService", {useClass: UserInternetService})

