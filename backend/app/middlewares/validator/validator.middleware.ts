import { body, param } from "express-validator";


export default {

    email: body("email").notEmpty().trim().isEmail(),
    password: body("password").notEmpty().trim().isStrongPassword(),
    id: param("id").notEmpty()
}