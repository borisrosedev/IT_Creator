import dotenv from "dotenv"
dotenv.config()
import express from "express"
import deviceRoutes from "@routes/deviceRoutes"
import userRoutes from "@routes/userRoutes"

const app = express()

app.use(express.urlencoded({ 
    extended: true,
}))
app.use(express.json({
    limit: "10mb"
}))


app.set("port", process.env.PORT)
app.set("host", process.env.HOST)

app.use("/api/devices", deviceRoutes)
app.use("/api/users", userRoutes)

app.listen(app.get("port"), () => {
    console.log(`✅ Server running at ${app.get("host")}: ${app.get("port")}`)
})













