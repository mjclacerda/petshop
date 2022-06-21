import express from "express";
import PostController from "../controllers/post.controller.js";
const router = express.Router();

router.post("/", PostController.createPost);
router.put("/", PostController.postComent);
router.get("/", PostController.getPost);

export default router;