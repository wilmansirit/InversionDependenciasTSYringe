import {promises as fs} from 'fs'
import { injectable } from 'tsyringe';
import { IUser, IUserLocalService } from "../interfaces";

@injectable()
export class UserLocalService implements IUserLocalService {

    users: IUser[] = []
    usersFile: string = `${__dirname}/../../users.json`;

    async getUsers(): Promise<IUser[]> {
        const data = await fs.readFile(this.usersFile, "utf8");
        this.users = JSON.parse(data);
        return this.users;
    }

}