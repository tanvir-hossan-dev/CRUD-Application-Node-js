const express = require("express")
const mongooe = require("mongoose")

const app = express()

app.get("/",(req,res)=>{
    res.json({name : "Tanvir"})
})

app.listen(4000,()=>{
    console.log("Port is listening");
})