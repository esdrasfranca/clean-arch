import type { Request, Response } from "express";
export declare class UserController {
    private repository;
    constructor();
    getAll(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getById(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
    update(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=UserController.d.ts.map