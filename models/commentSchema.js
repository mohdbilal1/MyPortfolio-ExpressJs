import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    name:{
        type: String,
        

    },
    textarea: {
        type: String,

    }
});

const commentModel= mongoose.model('msg',commentSchema);

export default commentModel;