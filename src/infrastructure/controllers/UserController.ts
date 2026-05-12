import type { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/use-cases/GetAllUsersUseCase.js";
import { UserRepository } from "../repository/UserRepository.js";
import { CreateUserUseCase } from "../../application/use-cases/CreateUserUseCase.js";
import { FindUserByIdUseCase } from "../../application/use-cases/FindUserByIdUseCase.js";
import { DeleteUserUseCase } from "../../application/use-cases/DeleteUserUseCase.js";
import { UpdateUserUseCase } from "../../application/use-cases/UpdateUserUseCase.js";
import { UpdateUserDTO } from "../../application/dtos/UpdateUserDTO.js";
import { CreateUserDTO } from "../../application/dtos/CreateUserDTO.js";

export class UserController {

    private repository: UserRepository;

    constructor() {
        this.repository = new UserRepository();
    }

    async getAll(req: Request, res: Response) {
        const useCase = new GetAllUsersUseCase(this.repository);
        const users = await useCase.execute();
        return res.json({ "data": users });
    }

    async create(req: Request, res: Response) {
        const useCase = new CreateUserUseCase(this.repository);
        const userDto = new CreateUserDTO(
            req.body.name,
            req.body.email,
            req.body.password,
        );
        const user = await useCase.execute(userDto);

        console.log(`User created successfully: ${user.id}`)

        return res.json({ "data": user });
    }

    async getById(req: Request, res: Response) {
        const id = req.params.id;

        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid id' });
            return;
        }

        const useCase = new FindUserByIdUseCase(this.repository);
        const user = await useCase.execute(id);

        res.json({ data: user });
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id;
        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid id' });
            return;
        }

        const useCase = new DeleteUserUseCase(this.repository);
        await useCase.execute(id);
        res.json({ message: 'User deleted successfully' });
    }

    async update(req: Request, res: Response) {
        const id = req.params.id;

        if (typeof id !== 'string') {
            res.status(400).json({ message: 'Invalid id' });
            return;
        }

        const useCase = new UpdateUserUseCase(this.repository);
        const userDto = new UpdateUserDTO(
            id,
            req.body.name,
            req.body.email,
        );

        await useCase.execute(userDto);

        res.json({ message: 'User updated successfully' });
    }

}