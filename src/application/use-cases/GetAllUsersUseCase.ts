import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";

export class GetAllUsersUseCase {

    constructor(private userRepository: UserRepositoryInterface) { }

    async execute(): Promise<User[]> {
        return await this.userRepository.findAll();
    }


}