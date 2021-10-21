import axios, { AxiosResponse } from "axios";
import { inject, injectable } from "tsyringe";
import { IUser, UserService } from "../interfaces";

@injectable()
export class UserInternetService implements UserService {
  users: IUser[] = [];
  private url: string = "";

  async getUsers(): Promise<IUser[]> {
    this.url = "http://jsonplaceholder.typicode.com/users";
    this.users = await (<any>axios.get(this.url));
    return this.users;
  }
}
