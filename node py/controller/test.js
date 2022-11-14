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

  childPython.stdout.on("data", async (data) => {
    const movieRecommendTitles = JSON.parse(data);
    movieRecommendTitles.unshift(searchmovie);
    const fetchRequests = movieRecommendTitles.map((movieTitle) =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieTitle}`
      )
    );

    // API call for details of recommended movies
    const response = await Promise.allSettled(fetchRequests);
    const recMovieDetails = await Promise.all(
      response.map((result) => {
        if (result.status === "fulfilled") return result.value.json();
      })
    );
    // API call to get details of movie searched by user
    const searchedMovieID = recMovieDetails[0].results[0].id;
    const searchedMovieRes = await fetch(`
    https://api.themoviedb.org/3/movie/${searchedMovieID}?api_key=${process.env.API_KEY}&language=en-US`);
    const searchedMovieDetails = await searchedMovieRes.json();
    // send response
    res.send({
      searchMovie: searchedMovieDetails,
      recommendMovies: recMovieDetails,
    });
  });
  // error handling
  // FIX: error handling, server crashes on invalid request
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
