import express from "express";
import { getProductController } from "../controller/product.controller.js";

const router = express.Router();

router.post("/products/search", getProductController);

export default router;
