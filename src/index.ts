import "reflect-metadata";
import { container } from "tsyringe";
import { Main } from "./api/main";
import { UserDBService, UserInternetService, UserLocalService } from "./services";

import { UserService } from "./interfaces";
import { userDBServiceContainer, userInternetServiceContainer, userLocalServiceContainer } from "./api/containers";


// userDBServiceContainer.getUsers().then(users => console.log(users));
// userLocalServiceContainer.getUsers().then(users => console.log(users));
// userInternetServiceContainer.getUsers().then((users) => console.log(users));



// const main = container.resolve(Main)

const api = new Main(userDBServiceContainer);

