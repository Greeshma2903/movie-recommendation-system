import fs from "fs";
import express, { application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/testroute.js";
import * as dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT || 1300;
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api/user", userRoutes);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.resolve(__dirname, "../client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
// });
// MongoDb connection =>
// const CONNECTION_URL = "mongodb://0.0.0.0:27017/test-app";

// mongoose
//   .connect(CONNECTION_URL)
//   .then(() => {
//     console.log("Connected to DB!");
//   })
//   .catch((error) => {
//     console.log("Couldn't connect");
//     console.log(error);
//   });

// popular movies
const rawdata = fs.readFileSync("popular-movies.json");
const popularMovies = JSON.parse(rawdata);

// Array of movie URLS
const popularMoviesList = popularMovies.movies.map((movieName) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${movieName}`;
});

// Send API response to frontend
app.get("/api", async (req, res) => {
  const fetchRequests = popularMoviesList.map((url) => fetch(url));
  const response = await Promise.allSettled(fetchRequests);
  const results = await Promise.all(
    response.map((result) => {
      if (result.status === "fulfilled") return result.value.json();
    })
  );
  res.send(results);
});

app.listen(PORT, () => {
  console.log("Server started on 1300");
});
