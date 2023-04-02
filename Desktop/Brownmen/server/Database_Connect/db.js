import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = `${process.env.DatabaseURL}`

async function connectToMongoDb () {
    try{
        await mongoose.connect(URL)
        console.log('MongoDB connected');
    }
    catch{
        console.log('MongoDB is not connected');
    }
}

export default connectToMongoDb;