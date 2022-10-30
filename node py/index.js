import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/testroute.js";
import {spawn} from 'child_process'

const childPython = spawn('python', ['movie_rec.py', "iron man"]);

childPython.stdout.on('data',(data)=>{
  console.log(`stdout: ${data}`);
});

childPython.stderr.on('data',(data)=>{
  console.log(`stderr: ${data}`);
});

childPython.on('close',(close)=>{
  console.log(`error: ${close}`);
});

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 1300;

// app.use("/user", userRoutes);

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

app.listen(PORT, () => {
    console.log("Server started on 1300");
  }); 
  