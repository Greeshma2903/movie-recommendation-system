import express from "express";
import PostMessage from "../models/testmodel.js";
import { spawn } from "child_process";

const router = express.Router();

// export const getPosts = async (req, res) => {
//   try {
//     // finding takes time... so async is better
//     const postMessage = await PostMessage.find({});
//     console.log(postMessage);
//     res.status(200).json(postMessage);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const getPosts = async (req, res) => {
const searchmovie = (JSON.stringify(req.params.data));
const childPython = spawn("python", ["movie_rec.py", searchmovie]);
childPython.stdout.on("data", (data) => {
  // console.log(`stdout: ${data}`);
  // how the data is req in frontend?
  // res.status(201).json(data);
  // console.log(typeof data)
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(JSON.stringify(element))
  }
});
childPython.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);    
});
childPython.on("close", (close) => {
  console.log(`error: ${close}`);
});
}

export const createPost = async (req, res) => {
    // const { title, message, selectedFile, creator, tags } = req.body;
    const post = req.body;
  
    const newPostMessage = new PostMessage({
      ...post,
    //   creator: req.userId,
    //   createdAt: new Date().toISOString(),
    });
  
    try {
      await newPostMessage.save();
      res.status(201).json(newPostMessage);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  export default router;
