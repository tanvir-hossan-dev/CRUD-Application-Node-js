require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const todoHandelar = require("./routes/todoHandelar")

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB)
  .then(()=>console.log("MongoDB Conected"))
  .catch((e)=>console.log(e))


app.use("/todo", todoHandelar)

app.get("/",(req,res)=>{
    res.json({name : "Tanvir"})
})

app.listen(4000,()=>{
    console.log("Port is listening");
})