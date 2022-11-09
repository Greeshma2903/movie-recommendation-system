import express from "express";
import PostMessage from "../models/testmodel.js";
import { spawn } from "child_process";
import * as dotenv from "dotenv";

dotenv.config();

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
  const searchmovie = JSON.stringify(req.params.data);
  const childPython = spawn("python", ["movie_rec.py", searchmovie]);
  childPython.stdout.on("data", (data) => {
    const movieRecommendTitles = JSON.parse(data);
    // res.send({ data: recommendList });

    const movieRecommendURL = movieRecommendTitles.map((movieName) => {
      return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieName}`;
    });
    const fetchRequests = movieRecommendURL.map((url) => fetch(url));

    // API call for details of recommended movies
    Promise.allSettled(fetchRequests)
      .then((response) =>
        Promise.all(
          response.map((result) => {
            if (result.status === "fulfilled") return result.value.json();
          })
        )
      )
      .then((response) => res.send(response));
  });
  // error handling
  childPython.stderr.on("data", (data) => {
    res.send({ error: "invalid request" });
  });
  childPython.on("close", (close) => {
    console.log(`error: ${close}`);
  });
};

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
