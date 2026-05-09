import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO.js";

export class UpdateUserUseCase {

    constructor(private userRepository: UserRepositoryInterface) { }

    async execute(userUpdateDto: UpdateUserDTO): Promise<boolean> {

        const userExists = await this.userRepository.findById(userUpdateDto.id);

        if (!userExists) throw new Error("User not found");

        const user = new User(
            userUpdateDto.id,
            userUpdateDto.name,
            userUpdateDto.email,
            userExists.password
        );

        const success = await this.userRepository.update(user);

        if (!success) throw new Error("Failed to update user");

        return true;

    }
}