import { User } from "../../domain/entity/User.js";
import type { UserRepositoryInterface } from "../../domain/repository/UserRepositoryInterface.js";

export class UserRepository implements UserRepositoryInterface {

    private static users: User[] = [];

    async create(user: User): Promise<void> {
        console.log(user);
        UserRepository.users.push(user);
        console.log('Count Users: ' + UserRepository.users.length)
    }

    async findById(id: string): Promise<User | null> {
        const user = UserRepository.users.find(user => user.id === id);
        return user || null;
    }

    async findAll(): Promise<User[]> {
        return UserRepository.users;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = UserRepository.users.find(user => user.email === email);
        return user || null;
    }

    async update(user: User): Promise<boolean> {
        const index = UserRepository.users.findIndex(u => u.id === user.id);
        if (index === -1) {
            return false;
        }
        UserRepository.users[index] = user;
        return true;
    }

    async delete(id: string): Promise<boolean> {
        const index = UserRepository.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false;
        }
        UserRepository.users.splice(index, 1);
        return true;
    }
}