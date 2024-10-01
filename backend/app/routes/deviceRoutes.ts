import DeviceController from "@controllers/DeviceController";
import { Router } from "express";

const route = Router()

route.get('/', DeviceController.read)

export { route as default } 