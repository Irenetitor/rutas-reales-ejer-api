import express from "express";
import { createUserController } from "../controller/user.controller.js";

const router = express.Router();

router.post("/users", createUserController);

export default router;
