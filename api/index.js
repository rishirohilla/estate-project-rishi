import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();
mongoose.connect(process.env.mongo_url).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error(err);
});

const app= express();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} ` );
});

app.use("/api/user", userRouter);