import { container } from "tsyringe";
import { UserDBService, UserInternetService, UserLocalService } from "../services";

export const userDBServiceContainer = container.createChildContainer().resolve(UserDBService)
export const userLocalServiceContainer = container.createChildContainer().resolve(UserLocalService);
export const userInternetServiceContainer = container.createChildContainer().resolve(UserInternetService);