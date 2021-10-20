import axios, { AxiosResponse } from "axios";
import { inject, injectable } from "tsyringe";
import { IUser, IUserLocalService } from "../interfaces";

@injectable()
export class UserInternetService implements IUserLocalService {
  users: IUser[] = [];
  private url: string = "";

  async getUsers(): Promise<IUser[]> {
    this.url = "http://jsonplaceholder.typicode.com/users";
    this.users = await (<any>axios.get(this.url));
    return this.users;
  }
}
