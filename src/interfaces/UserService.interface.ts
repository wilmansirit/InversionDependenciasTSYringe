import { IUser } from "./IUser";

export interface UserService {

  users: IUser[];
  getUsers(): Promise<IUser[]>;
  
}
