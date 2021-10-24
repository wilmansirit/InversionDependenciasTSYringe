import { injectable, inject } from "tsyringe";
import { User } from "../entity/User";
import { IUser, UserService } from "../interfaces";
import { UserRepository } from "../repositories/user.repository";

@injectable()
export class UserDBService implements UserService {
  users: IUser[];

  constructor(
    @inject("UserRepository") private userRepository: UserRepository
  ) {}

  async getUsers(): Promise<IUser[]> {
    this.users = await <any>this.userRepository.list();
    return this.users;
  }
}
