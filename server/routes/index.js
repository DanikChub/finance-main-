import { Router } from "express";
import { userRouter } from "./userRouter.js";
import { incomeRouter } from "./incomeRouter.js";
import { incomeCategoryRouter } from "./incomeCategoryRouter.js";
import { expenseRouter } from "./expenseRouter.js";
const router = new Router();

router.use('/user', userRouter);
router.use('/income', incomeRouter);
router.use('/income_category', incomeCategoryRouter);
router.use('/expense', expenseRouter);

export {router};