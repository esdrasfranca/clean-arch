import { User } from "../../domain/entity/User.js";
export class FindUserByIdUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }
}
//# sourceMappingURL=FindUserByIdUseCase.js.map