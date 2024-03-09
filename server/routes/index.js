import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { incomeRouter } from "./incomeRouter.js";
import { expenseRouter } from "./expenseRouter.js";
const router = new Router();

router.use('/user', userRouter);
router.use('/income', incomeRouter);
router.use('/expense', expenseRouter);

export {router};