import { IUser } from "./IUser";

export interface UserService {

  getUsers(): Promise<IUser[]>;
  
}
