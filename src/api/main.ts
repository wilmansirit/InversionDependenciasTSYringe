import { injectable } from "tsyringe";
import { IUser, UserService } from "../interfaces";

@injectable()
export class Main {
  
  private users: IUser[] = [];

  constructor(private userService: UserService) {
    this.logger();
  }

  private async getUsers(): Promise<IUser[]> {
    return this.userService.getUsers();
  }

  private logger() {
    this.getUsers()
      .then((users) => console.log(users))
      .catch((err) => console.log(err));
  }
}
