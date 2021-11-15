import { IUser } from "./IUser";

export interface UserInternetServiceInterface {

  getUsers(): Promise<IUser[]>;
  
}
