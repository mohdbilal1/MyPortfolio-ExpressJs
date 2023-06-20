import commentModel from "../models/commentSchema.js";

const deleteDoc = async (req,res) => {
    const result = await commentModel.deleteOne({
       _id: req.params.id
    })
    console.log(result)
    res.render('comment', { data: result })
    res.redirect('/comment');
    
}

export { deleteDoc };