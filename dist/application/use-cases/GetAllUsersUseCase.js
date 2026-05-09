import { User } from "../../domain/entity/User.js";
export class GetAllUsersUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute() {
        return await this.userRepository.findAll();
    }
}
//# sourceMappingURL=GetAllUsersUseCase.js.map