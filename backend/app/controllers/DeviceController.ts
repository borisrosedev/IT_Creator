import MongoDBConnection from "@database/MongoDBConntection";
import { ObjectId } from "mongodb";

class DeviceController{

    static async create(req: any, res:any){
        const dbConnection = MongoDBConnection.getInstance() as any
        try {
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const newDevice = await db.collection("devices").insertOne(req.body)
            dbConnection.close()
            res.status(201).json("user created")
        } catch(e:any) {
            dbConnection.close()
            console.trace(e.message)
            res.status(500).json("server error while retrieving data from the db")
        }
    }

    static async read(req: any, res:any){
       if(!req.params.id) {
            const dbConnection = MongoDBConnection.getInstance() as any
            try {      
                const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
                const allDevices = await db.collection("devices").find().toArray()
                if(allDevices.length){ 
                    dbConnection.close()
                    return res.status(200).json(allDevices)
                } else {
                    return res.status(404).json({message: "devices not found"})
                } 
            } catch(e:any) {
                dbConnection.close()
                console.trace(e.message)
                res.status(500).json("server error while retrieving data from the db")
            } 
       } else {
            return res.json("id")
       }

    }

    static async update(req: any,res:any){
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

    static async delete(req: any, res:any){
        const dbConnection = MongoDBConnection.getInstance() as any
        try {
            const db = await dbConnection.connect(process.env.MONGO_URL, process.env.MONGO_INITDB_DATABASE)
            const response = await db.deleteOne({ id: new ObjectId(req.params.id) });
            return res.status(200).json(response)
        } catch(e: any){
            dbConnection.close()
            console.trace(e.message)
            return res.status(500).json("server error while updating data of the db") 
        }
    }


}


export { DeviceController as default}
