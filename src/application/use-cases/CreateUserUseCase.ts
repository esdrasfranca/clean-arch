import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";
import { CreateUserDTO } from "../dtos/CreateUserDTO.js";

export class CreateUserUseCase {

    constructor(private userRepository: UserRepositoryInterface) { }

    async execute(userDto: CreateUserDTO): Promise<User> {
        const user = new User(
            null,
            userDto.name,
            userDto.email,
            userDto.password
        );

        await this.userRepository.create(user);

        return user;
    }


}