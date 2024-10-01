import CustomRequest from "@interfaces/CustomRequest.interface"
import { Response } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import path from "path"
const p = path.resolve(__dirname,"../.env")
dotenv.config({
  path: p
})

export default (req: CustomRequest, res: Response, next: any) => {

    if(!("authorization" in req.headers)){
        return res.status(403).json({ message: 'Restricted Access'})
    } else {
        const token = req.headers.authorization!.split(" ")[1] 
        if(!token) {
            return res.status(401).json({ message: 'Restricted Access'})
        } else {
            const decodedToken = (jwt as any).decode(token, process.env.TOKEN_SECRET)
            if("username" in decodedToken){
                req.auth = decodedToken.username
                return next()
            } else {
                return res.status(401).json({ message: 'Restricted Access'}) 
            }
        }
    }


}