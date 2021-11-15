import axios, { AxiosResponse } from "axios";
import { injectable } from "tsyringe";
import { IUser,UserInternetServiceInterface } from "../interfaces";

@injectable()
export class UserInternetService implements UserInternetServiceInterface {
  private users: IUser[];
  private url: string;

  async getUsers(): Promise<IUser[]> {
    try {
      this.url = "http://jsonplaceholder.typicode.com/users";
      const response: AxiosResponse = await axios.get(this.url);

      this.users = response.data as IUser[];
      return this.users;
    } catch (err) {
      throw Error("Error al conectarse a la base de datos");
    }
  }
}
