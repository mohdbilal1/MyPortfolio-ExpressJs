import commentModel from "../models/commentSchema.js";

const readDoc = async (req, res) => {
    const result = await commentModel.find();
    // console.log(result)
    res.render('comment', { data: result })
}

export { readDoc };