const Post = require('../model/post');
const User = require('../model/user');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

const getUserPosts = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
const createPost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
const  getPost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
const  updatePost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
const  deletePost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
module.exports = {deletePost,updatePost,getPost,createPost,getUserPosts};

/*
const createPost = async (req, res) => {
    try{
        const {userId,title, description ,picturePath} = req.body;
        const user = await User.findById(userId);

        const newPost = new Post({
            userId,
            firstName : user.firstName,
            lastName : user.lastName,
            title,
            description,
            picturePath,
        })

        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post);

    } catch (err) {
        res.status(409).json({message : err.message});
    }
};

const getFeedPosts = async (req,res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);

    } catch (err) {
        console.error(err);
        res.status(409).json({message : err.message});
    }
};
/*
const getUserPosts = async (req,res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find({ userId });
        res.status(200).json(post);

    } catch (err) {
        res.status(409).json({message : err.message});
    }
};*/

