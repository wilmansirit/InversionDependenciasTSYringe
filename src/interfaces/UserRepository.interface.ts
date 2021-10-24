import { IUser } from ".";
import { User } from "../entity/User";

export interface UserRepository {
    list() : Promise<User>;
}