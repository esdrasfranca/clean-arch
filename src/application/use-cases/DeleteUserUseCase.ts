import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";

export class DeleteUserUseCase {
    constructor(private userRepository: UserRepositoryInterface) { }

    async execute(id: string): Promise<boolean> {
        return await this.userRepository.delete(id);
    }

}