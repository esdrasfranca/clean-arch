import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
export declare class UserRepository implements UserRepositoryInterface {
    private users;
    create(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    update(user: User): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
//# sourceMappingURL=UserRepository.d.ts.map