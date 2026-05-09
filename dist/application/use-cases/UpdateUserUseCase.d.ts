import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO.js";
export declare class UpdateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(userUpdateDto: UpdateUserDTO): Promise<boolean>;
}
//# sourceMappingURL=UpdateUserUseCase.d.ts.map