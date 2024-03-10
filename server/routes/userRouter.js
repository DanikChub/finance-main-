import { Router } from "express";
const userRouter = new Router();
import authMiddleware from "../middleware/authMiddleware.js";
import { userController } from "../controllers/userController.js";

userRouter.post('/registration', userController.registration)
userRouter.post('/login', userController.login)
userRouter.get('/auth', authMiddleware, userController.check)
userRouter.post('/getUser', userController.getUserById)

export {userRouter};