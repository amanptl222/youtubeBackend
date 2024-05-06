import dotenv from "dotenv"

import express from 'express';
import connectDB from './db/index.js';

dotenv.config({path:'./env'})

// const app = express();

connectDB()

/*
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_NAME}/${DB_NAME}`)
       app.on("error",(error)=>{
            console.log("ERRR:", err)
       })

       app.listen(process.env.PORT,()=>{
            console.log("working on", process.env.PORT);
       })
    }catch(err){
        console.log("ERROR: ", err)
        throw err
    }
})()
*/