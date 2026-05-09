import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
export declare class GetAllUsersUseCase {
    private userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(): Promise<User[]>;
}
//# sourceMappingURL=GetAllUsersUseCase.d.ts.map