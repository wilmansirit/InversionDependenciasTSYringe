import { User } from "../entity/User";

export interface UserRepositoryInterface {
    list() : Promise<User[]>;
}