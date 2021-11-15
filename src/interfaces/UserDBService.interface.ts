import { IUser } from "./IUser";

export interface UserDBServiceInterface {

  getAllUsers(): Promise<IUser[]>;
  
}
