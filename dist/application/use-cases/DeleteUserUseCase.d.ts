import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
export declare class DeleteUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(id: string): Promise<boolean>;
}
//# sourceMappingURL=DeleteUserUseCase.d.ts.map