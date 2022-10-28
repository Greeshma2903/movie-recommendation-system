import mongoose from "mongoose";

const testSchema = mongoose.Schema({
    title: String,
})

var PostMessage = mongoose.model("PostMessage", testSchema);

export default PostMessage;
