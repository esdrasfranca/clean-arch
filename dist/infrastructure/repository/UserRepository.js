import { User } from "../../domain/entity/User.js";
export class UserRepository {
    users = [];
    async create(user) {
        console.log(user);
        this.users.push(user);
        console.log('Count Users: ' + this.users.length);
    }
    async findById(id) {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }
    async findAll() {
        return this.users;
    }
    async findByEmail(email) {
        const user = this.users.find(user => user.email === email);
        return user || null;
    }
    async update(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index === -1) {
            return false;
        }
        this.users[index] = user;
        return true;
    }
    async delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            return false;
        }
        this.users.splice(index, 1);
        return true;
    }
}
//# sourceMappingURL=UserRepository.js.map