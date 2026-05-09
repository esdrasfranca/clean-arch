export declare class User {
    private _id;
    private _name;
    private _email;
    private _password;
    constructor(id: string | null, name: string, email: string, password: string);
    get id(): string | null;
    get name(): string;
    get email(): string;
    get password(): string;
    private validate;
    private generateId;
}
//# sourceMappingURL=User.d.ts.map