const express = require("express")
const userRouter = express.Router()
const {UserModel} = require("../models/users.model")

userRouter.get("/",async (req,res)=>{
    try {
        let data = await UserModel.find()
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

userRouter.post("/",async(req,res)=>{
    const {name,difficulty,score} = req.body
    try {
        const user = new UserModel({name,difficulty,score})
        await user.save()
        res.send("start game")
    } catch (error) {
        res.send(error)
    }
})

module.exports = {userRouter}