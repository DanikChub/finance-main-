import { Router } from "express";
const accountRouter = new Router();
import { accountController } from "../controllers/accountController.js";

accountRouter.get('/', accountController.getAll);
accountRouter.post('/create', accountController.create);
accountRouter.post('/:id', accountController.getOne);

export {accountRouter};