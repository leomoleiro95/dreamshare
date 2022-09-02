import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPostsBySearch,
  getPost,
  commentPost,
} from "../controllers/posts.js";
import auth from "../middleware/auth.js";

const router = express.Router();


router.get("/fullstack_dreamshare", getPosts);
router.get("/fullstack_dreamshare/search", getPostsBySearch);
router.get("/fullstack_dreamshare/:id", getPost);

router.post("/fullstack_dreamshare/", auth, createPost);

router.patch("/fullstack_dreamshare/:id", auth, updatePost);
router.delete("/fullstack_dreamshare/:id", auth, deletePost);
router.patch("/fullstack_dreamshare/:id/likePost", auth, likePost);
router.post("/fullstack_dreamshare/:id/commentPost", auth, commentPost);

export default router;
