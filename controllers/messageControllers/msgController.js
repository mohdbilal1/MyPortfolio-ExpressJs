import msgModel from "../../models/messageSchema.js";

const CreateMsgDoc=async(req,res)=>{
    try {
        const {name,email,subject,message}=req.body;
        
        const creatDoc= new msgModel({
            name : name,
            email: email,
            subject:subject,
            message:message
        })
        const result=await creatDoc.save();
        // console.log(result)
        res.redirect('/');
        
    } catch (error) {
        console.log(error);
    }
}

export {CreateMsgDoc};