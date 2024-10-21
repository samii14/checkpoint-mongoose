const express = require("express")
const app = express()
const dotenv= require("dotenv")
const mongoose = require("mongoose")
dotenv.config()
app.use(express.json())
app.use("/api", require("./routes/userRoutes"))



mongoose.connect(process.env.MONGO_URI).then(()=>console.log("database connected"))
.catch((err)=> console.error("err",err))




const port = process.env.port
app.listen(port, ()=>console.log("my server is running on port",port))