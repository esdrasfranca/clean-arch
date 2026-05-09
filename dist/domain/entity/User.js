export class User {
    _id;
    _name;
    _email;
    _password;
    constructor(id, name, email, password) {
        this._id = id ? id : this.generateId();
        this._name = name;
        this._email = email;
        this._password = password;
        this.validate();
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get email() {
        return this._email;
    }
    get password() {
        return this._password;
    }
    validate() {
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
    generateId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
//# sourceMappingURL=User.js.map