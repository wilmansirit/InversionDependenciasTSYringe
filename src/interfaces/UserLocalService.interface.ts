import { IUser } from "./IUser";

export interface UserLocalServiceInterface {

  getUsers(): Promise<IUser[]>;
  
}
