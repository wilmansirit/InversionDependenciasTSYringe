import { inject, injectable } from "tsyringe";
import { User } from "../entity/User";
import { UserRepositoryInterface, DatabaseConnectionInterface } from "../interfaces";

@injectable()
export class UserRepository implements UserRepositoryInterface {


  constructor(@inject("DatabaseConnection") private dataBaseConnection: DatabaseConnectionInterface)
  {};

  async list(): Promise<User[]> {

    const connection = await this.dataBaseConnection.getConnection()
    const repository = connection.getRepository(User)

    return await repository.find();
  }
 
}
