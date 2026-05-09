import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
import { CreateUserDTO } from "../dtos/CreateUserDTO.js";
export declare class CreateUserUseCase {
    private userRepository;
    constructor(userRepository: UserRepositoryInterface);
    execute(userDto: CreateUserDTO): Promise<User>;
}
//# sourceMappingURL=CreateUserUseCase.d.ts.map