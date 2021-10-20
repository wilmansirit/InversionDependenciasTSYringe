import { injectable } from "tsyringe";
import { IUser, IUserLocalService } from "../interfaces";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class UserDBService implements IUserLocalService {
  users: IUser[] = [];
  repository: any;

  constructor() {
      this.repository = new UserRepository();
  }

  async getUsers(): Promise<IUser[]> {
    return await this.repository.list();
  }
}
