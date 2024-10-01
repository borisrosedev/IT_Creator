import MongoDBConnection from "@database/MongoDBConntection";
import CustomRequest from "@interfaces/CustomRequest.interface";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



class UserController {

    static async register(req: Request, res: Response) {
        const dbConnection = MongoDBConnection.getInstance() as any
        try {
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const user = await db.collection("users").findOne({ email: req.body.email })
            if(user) {
                dbConnection.close();
                return res.status(400).json({ message: 'invalid data'})
            } else {
                const hashPassword = bcrypt.hashSync(req.body.password, 10)
                const newUser = await db.collection("users").insertOne({
                    ...req.body, password: hashPassword
                })
                const token = jwt.sign({ username: req.body.email }, process.env.TOKEN_SECRET as any, { expiresIn: '1h'})
                dbConnection.close()
                return res.status(201).json({ token, ...newUser})
            }

        } catch(e: any){
            dbConnection.close()
            console.trace(e.message)
            return res.status(500).json("server error while inserting data into the db")
        }

    }

    static async readAll(req: Request, res: Response) {
        const dbConnection = MongoDBConnection.getInstance() as any
        try {    
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const allUsers = await db.collection("users").find().toArray()
            if(allUsers.length){
                dbConnection.close()
                return res.status(200).json(allUsers)
            } else {
                dbConnection.close()
                return res.status(404).json({message: "no user found"})
            } 
        } catch(e:any) {
            dbConnection.close()
            console.trace(e.message)
            return res.status(500).json("server error while retrieving data from the db")
        } 
    }

    static async readOneById(req: CustomRequest, res: Response) {


        const dbConnection = MongoDBConnection.getInstance() as any
        try {
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const user = await db.collection("users").findOne({ _id: new ObjectId(req.params.id)})

            if(!user){
                dbConnection.close()
                return res.status(404).json("user not found")
            } else {

                if(!(user.email === req.auth)) {
                    dbConnection.close()
                    return res.status(403).json("Restricted Access")
                } else {
                    dbConnection.close()
                    return res.status(200).json(user)
                }
            }
            
        } catch(e: any) {
            dbConnection.close()
            console.trace(e.message)
            return res.status(500).json("server error while retrieving data from the db")
        }


    }

    static async updateOneById(req: CustomRequest, res: Response) {
        const dbConnection = MongoDBConnection.getInstance() as any
        try {
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const response = await db.updateOne({ id: new ObjectId(req.params.id) }, { $set: { ...req.body } });
            return res.status(200).json(response)
        } catch(e: any){
            dbConnection.close()
            console.trace(e.message)
            return res.status(500).json("server error while updating data of the db") 
        }
    
    }

    static async deleteOneById(req: CustomRequest, res: Response) {
        const dbConnection = MongoDBConnection.getInstance() as any
        try {
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const response = await db.deleteOneById({ id: new ObjectId(req.params.id) }, { $set: { ...req.body } });
            dbConnection.close()
            return res.status(200).json(response)
        } catch(e: any){
            dbConnection.close()
            console.trace(e.message)
            return res.status(500).json("server error while updating data of the db") 
        }
    }
}

export { UserController as default }