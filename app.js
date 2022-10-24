const express = require("express")
const errorHandler = require("./middleware/errorHandler")
const sequelize = require("./model/db")
const models = require("./model/models")
const fileupload = require("express-fileupload")
const router = require("./router")
const path =require("path")


const app = express()

const PORT =process.env.PORT||5000


app.use(express.json())
app.use(fileupload({}))
app.use(express.static(path.resolve(__dirname,"static")))
app.use("/api",router)



app.use(errorHandler)
const start =async()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT,()=>{
            console.log(`Server started ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()