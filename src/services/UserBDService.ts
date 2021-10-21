import { injectable } from "tsyringe";
import { IUser, UserService } from "../interfaces";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class UserDBService implements UserService {
  users: IUser[] = [];
  repository: any;

  constructor() {
      this.repository = new UserRepository();
  }

  async getUsers(): Promise<IUser[]> {
    return await this.repository.list();
  }
}
