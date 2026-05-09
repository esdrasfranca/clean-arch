import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";

export class FindUserByIdUseCase {
    constructor(private userRepository: UserRepositoryInterface) { }

    async execute(id: string): Promise<User> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return user;

    }

}