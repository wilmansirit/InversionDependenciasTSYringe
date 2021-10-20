import { inject, injectable } from "tsyringe";
import { IUser } from "../interfaces";
import { UserDBService, UserInternetService, UserLocalService } from "../services";

@injectable()
export class Main {
    
  users: IUser[] = [];

  constructor(@inject(UserLocalService) private userLocalService: UserLocalService)
 {
    this.logger();
  }

  async getUsers(): Promise<IUser[]> {
    return this.userLocalService.getUsers();
  }

  logger() {
    this.getUsers()
      .then((users) => console.log(users))
      .catch((err) => console.log(err));
  }
}
