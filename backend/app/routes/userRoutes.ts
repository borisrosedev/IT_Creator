import UserController from "@controllers/UserController";
import authMiddleware from "@middlewares/auth/auth.middleware";
import errorMiddleware from "@middlewares/error/error.middleware";
import validatorMiddleware from "@middlewares/validator/validator.middleware";
import { Router } from "express";

const route = Router() as any

route.get('/', UserController.readAll)
route.get('/:id', validatorMiddleware.id, errorMiddleware.validator, authMiddleware, UserController.readOneById)
route.put('/:id', validatorMiddleware.id, errorMiddleware.validator, authMiddleware, UserController.updateOneById)
route.post('/register', validatorMiddleware.email, validatorMiddleware.password, errorMiddleware.validator, UserController.register)
export { route as default } 