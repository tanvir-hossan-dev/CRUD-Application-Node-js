const express = require("express");
const router = express.Router()
const todo = require("../models/todo")

//get all todos
router.get("/", async(req,res)=>{
    const data = await todo.find({})

    res.status(200).json({message : "get data successful", data})

})


//get a todo by id
router.get("/:id", async(req,res)=>{
     const data = await todo.findById({_id : req.params.id})
     res.status(200).json({message : "get single data", data})
})

//post todo
router.post("/", async(req,res)=>{

    const newTodo = new todo(req.body)
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json("This is Server side error")
        }else{
            res.status(200).json({Message : "Create todo successful",newTodo})
        }
    })

})

//post multiple todo
router.post("/all", async(req,res)=>{

    await todo.insertMany(req.body,(err)=>{
        if(err){
            res.status(500).json("This is Server side error")
        }else{
            res.status(200).json({Message : "Create todos successful"})
        }
    })

})

//put todo
router.put("/:id", async(req,res)=>{

    await todo.updateOne(
        {_id: req.params.id}
        ,{
            $set : {
                title : "Learn JavaScript"
            }
    },{ runValidators: true },(err)=>{
        if(err){
            res.status(500).json("This is Server side error")
        }else{
            res.status(200).json({Message : "Update todo successful"})
        }
    })

})

//delete todo
router.delete("/:id", async(req,res)=>{
    const data = await todo.deleteOne({_id : req.params.id})
    res.status(203).json({message : "delete successfull"})

})


module.exports = router