import { inject, injectable } from "tsyringe";
import { User } from "../entity/User";
import { DatabaseConnectionInterfase } from "../interfaces/databaseConnection.interfase";

@injectable()
export class UserRepository {

  constructor(@inject("databaseConnection") private dataBaseConnection: DatabaseConnectionInterfase)
  {};

  async list() {

    const connection = await this.dataBaseConnection.getConnection()
    const repository = connection.getRepository(User)

    return await repository.find();
  }
  
}
