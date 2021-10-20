import { createConnection, Connection } from "typeorm";
import { User } from "../entity/User";

export class UserRepository {

  async list() {
    const connection = await createConnection()
    const repository = connection.getRepository(User)

    return await repository.find();
  }
  
}
