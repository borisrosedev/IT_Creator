import { Request } from "express";

interface CustomRequest extends Request {
    auth?: string
}

export { CustomRequest as default }