import { User } from "../../domain/entity/User.js";
import { CreateUserDTO } from "../dtos/CreateUserDTO.js";
export class CreateUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userDto) {
        const user = new User(null, userDto.name, userDto.email, userDto.password);
        await this.userRepository.create(user);
        return user;
    }
}
//# sourceMappingURL=CreateUserUseCase.js.map