import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
export function createUserRoutes() {
    const router = Router();
    router.get('/', (req, res) => {
        const result = new UserController().getAll(req, res);
        return res.json({ "data": result });
    });
    router.post('/', (req, res) => {
        new UserController().create(req, res);
    });
    router.get('/:id', (req, res) => {
        res.json({ message: 'User fetched successfully' });
    });
    router.delete('/:id', (req, res) => {
        res.json({ message: 'User deleted successfully' });
    });
    router.put('/:id', (req, res) => {
        res.json({ message: 'User updated successfully' });
    });
    return router;
}
//# sourceMappingURL=UserRoutes.js.map