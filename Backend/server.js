import express from "express";
import mongoose from "mongoose";

import cors from 'cors';
import { userRoutes } from "./routes/userRoutes.js";
import { originalRoutes } from "./routes/originalRoutes.js";

import dotenv from 'dotenv';

dotenv.config();

const app=new express();


const router= express.Router();
mongoose.connect(process.env.MONGO_PASSWORD);

const db=mongoose.connection;


db.on("open",()=>{
    console.log("connection success");
});

db.on("error",()=>{
    console.log("connection unsuccess");
});

app.listen(4000,()=>{
    console.log("server is running at port 4000");
});

app.set("view engine","ejs");
app.use(cors());
app.use(express.json());

userRoutes(app);


originalRoutes(app);


