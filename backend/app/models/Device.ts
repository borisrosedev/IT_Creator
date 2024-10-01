import { Request, Response } from "express"
import { validationResult } from "express-validator"


export default { 

    validator:(req: Request, res: Response, next:any) => {
        const results = validationResult(req)
        if(!results.isEmpty()) {
            return res.status(400).json(results.array())
        } else {
            return next()
        }
    } 

}