import { Router } from "express";
import { UserController } from "../controllers/UserController.js";

export function createUserRoutes(): Router {

    const router = Router();

    router.get('/', async (req, res) => {
        await new UserController().getAll(req, res);
    });

    router.post('/', async (req, res) => {
        await new UserController().create(req, res);
    });

    router.get('/:id', async (req, res) => {
        await new UserController().getById(req, res);
    });

    router.delete('/:id', async (req, res) => {
        await new UserController().delete(req, res);
    });

    router.put('/:id', async (req, res) => {
        await new UserController().update(req, res);
    });


    return router;

}