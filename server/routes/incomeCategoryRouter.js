import { Router } from "express";
const incomeCategoryRouter = new Router();
import { incomeCategoryController } from "../controllers/incomeCategoryController.js";

incomeCategoryRouter.post('/create', incomeCategoryController.create);
incomeCategoryRouter.get('/', incomeCategoryController.getAll);
incomeCategoryRouter.get('/with_parametr', incomeCategoryController.getAllWithParametr);
incomeCategoryRouter.get('/:id', incomeCategoryController.getOne);


export {incomeCategoryRouter};