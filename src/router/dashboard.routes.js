import express from "express";
import { postDashboardController } from "../controller/dashboard.controller.js";

const router = express.Router();

router.post("/dashboard/verify", postDashboardController);

export default router;
