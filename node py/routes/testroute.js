import express from "express";

import { createPost, getPosts } from "../controller/test.js";

const router = express.Router();

router.post("/", createPost);
router.get("/", getPosts);

export default router;
