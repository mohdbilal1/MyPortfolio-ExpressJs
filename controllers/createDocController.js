import commentModel from "../models/commentSchema.js";

const CreateDoc=async(req,res)=>{
    try {
        const {name,textarea}=req.body;
        
        const creatDoc= new commentModel({
            name : name,
            textarea: textarea
        })
        const result=await creatDoc.save();
        res.redirect('/comment');
        
    } catch (error) {
        console.log(error);
    }
}

export {CreateDoc};