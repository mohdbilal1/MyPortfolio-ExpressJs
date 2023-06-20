import mongoose from "mongoose";

const connectDB=async(database)=>{
     await mongoose.connect(database);
    console.log('db connected');

}

export default connectDB;