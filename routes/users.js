import express from "express";
const router = express.Router();

import {signin, signup } from "../controllers/user.js";


router.post("/fullstack_dreamshare/signin", signin);
router.post("/fullstack_dreamshare/signup", signup);

export default router