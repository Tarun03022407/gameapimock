const express = require("express")
const app = express()
app.use(express.json())

const {connection } = require("./configs/db")
var randomWords = require('random-words');
// app.get("/",)
const {UserModel} = require("./models/users.model")
const {userRouter}= require("./routes/user.routes")
// app.get("/users",async(req,res)=>{
//     try {
//         let data 
//     } catch (error) {
        
//     }
// })
app.use("/users",userRouter)

app.get("/random",async(req,res)=>{
    // res.send(randomWords)
    let randomWord = randomWords(1)
    res.send(randomWord)
})
console.log(randomWords());
// army
app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log(`SERVER RUNNING AT ${process.env.PORT}`)
})