export class User {

    private _id: string;
    private _name: string;
    private _email: string;
    private _password: string;

    constructor(
        id: string | null,
        name: string,
        email: string,
        password: string
    ) {
        this._id = id ? id : this.generateId();
        this._name = name;
        this._email = email;
        this._password = password;

        this.validate();
    }

    get id(): string | null {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    get password(): string {
        return this._password;
    }

    private validate(): void {

        if (this._name.length < 3) {
            throw new Error('Invalid name');
        }
        if (this._email.length < 5) {
            throw new Error('Invalid email');
        }

        if (this._password.length < 6) {
            throw new Error('Invalid password');
        }

    }

    private generateId(): string {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

}