import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
export declare class FindUserByIdUseCase {
    private userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(id: string): Promise<User>;
}
//# sourceMappingURL=FindUserByIdUseCase.d.ts.map