import mongoose from "mongoose";

const msgSchema=new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter your Name"]
    },
    email: {
        type: String,

    },
    subject:{
        type: String,
        
    },
    message:{
        type: String,
        required:true,
    }
});

const msgModel= mongoose.model('message',msgSchema);

export default msgModel;