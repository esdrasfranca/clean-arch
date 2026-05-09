import { User } from "../../domain/entity/User.js";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO.js";
export class UpdateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userUpdateDto) {
        const userExists = await this.userRepository.findById(userUpdateDto.id);
        if (!userExists)
            throw new Error("User not found");
        const user = new User(userUpdateDto.id, userUpdateDto.name, userUpdateDto.email, userExists.password);
        const success = await this.userRepository.update(user);
        if (!success)
            throw new Error("Failed to update user");
        return true;
    }
}
//# sourceMappingURL=UpdateUserUseCase.js.map