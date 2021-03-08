const mongoose = require("mongoose");

const postsSchema = {
    title: String,
    content: String,
    date:{
        type: Date,
        default: Date.now
    }
}


// save the schema for the "posts" drirectory
const Post = mongoose.model("posts", postsSchema);

module.exports = Post;