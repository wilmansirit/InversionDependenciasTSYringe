import { IUser } from "./IUser";

export interface IUserLocalService {

  users: IUser[];
  getUsers(): Promise<IUser[]>;
  
}
