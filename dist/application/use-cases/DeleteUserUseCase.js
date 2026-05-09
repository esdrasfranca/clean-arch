export class DeleteUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        return await this.userRepository.delete(id);
    }
}
//# sourceMappingURL=DeleteUserUseCase.js.map