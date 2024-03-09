import { Router } from "express";
const incomeRouter = new Router();
import { incomeController } from "../controllers/incomeController.js";

incomeRouter.post('/create', incomeController.create);
incomeRouter.get('/', incomeController.getAll);
incomeRouter.get('/:id', incomeController.getOne);

export {incomeRouter};