import {inject, injectable} from "tsyringe";
import {IUser, UserDBServiceInterface} from "../interfaces";

@injectable()
export class Main {
  private users: IUser[] = [];

  constructor(@inject("UserService") private userService: UserDBServiceInterface) {
    this.logger();
  }

  private async getUsers(): Promise<IUser[]> {
    this.users = await this.userService.getAllUsers();
    return this.users;
  }

  private logger() {
    this.getUsers()
      .then((users) => console.log(users))
      .catch((err) => console.log(err))
  }
}
