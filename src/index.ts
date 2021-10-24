import "reflect-metadata";
import {
  userDBServiceContainer,
  userLocalServiceContainer,
  userInternetServiceContainer,
  userDBRepositoryContainer,
} from "./api/containers";
import { Main } from "./api/main";
// import { UserDBService } from './services';

// userLocalServiceContainer.resolve(Main);
userDBServiceContainer.resolve(Main);
// userInternetServiceContainer.resolve(Main);