import { User } from "../entity/User.js";

export interface UserRepositoryInterface {

    create(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<boolean>;
    delete(id: string): Promise<boolean>;

}