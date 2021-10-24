import { promises as fs } from "fs";
import { injectable } from "tsyringe";
import { IUser, UserService } from "../interfaces";

@injectable()
export class UserLocalService implements UserService {
  users: IUser[];
  usersFile: string;

  constructor() {
    this.usersFile = `${__dirname}/../../users.json`;
  }

  async getUsers(): Promise<IUser[]> {
    const data: string = await fs.readFile(this.usersFile, "utf8");
    this.users = JSON.parse(data);
    return this.users;
  }
}
