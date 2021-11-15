import { injectable, inject } from "tsyringe";
import { IUser, UserDBServiceInterface, UserRepositoryInterface} from "../interfaces";


@injectable()
export class UserDBService implements UserDBServiceInterface {
  users: IUser[];

  constructor(
    @inject("UserRepository") private userRepository: UserRepositoryInterface
  ) {}

  async getAllUsers(): Promise<IUser[]> {
    this.users = await <any>this.userRepository.list();
    return this.users;
  }
}
