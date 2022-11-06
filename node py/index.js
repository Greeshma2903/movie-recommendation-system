import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/testroute.js";
import { spawn } from "child_process";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const PORT = 1300;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// recommended movies
// const childPython = spawn("python", ["movie_rec.py", "iron man"]);

// childPython.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
// });

// childPython.stderr.on("data", (data) => {
//   console.log(`stderr: ${data}`);
// });

// childPython.on("close", (close) => {
//   console.log(`error: ${close}`);
// });

app.use("/user", userRoutes);

const CONNECTION_URL = "mongodb://0.0.0.0:27017/test-app";

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((error) => {
    console.log("Couldn't connect");
    console.log(error);
  });

// popular movies
let rawdata = fs.readFileSync("popular-movies.json");
let popularMovies = JSON.parse(rawdata);

// Array of movie URLS
const popularMoviesList = popularMovies.movies.map((movieName) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieName}`;
});

// Send API response to frontend
app.get("/", async (req, res) => {
  const fetchRequests = popularMoviesList.map((url) => fetch(url));
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

app.listen(PORT, () => {
  console.log("Server started on 1300");
});
