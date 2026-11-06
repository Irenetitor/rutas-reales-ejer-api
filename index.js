//IMPORTACIONES
import "dotenv/config";
import express from "express";
import userRouter from "./src/router/user.route.js";
import searchRouter from "./src/router/product.route.js";
import verifyRouter from "./src/router/dashboard.routes.js";

//CONFIGURACIONES
const api = express();
const port = process.env.PORT || 3001;
api.use(express.json());

//API (para ejercicios)
api.get("/", (req, res) => {
  res.send("todo ok");
});

//RUTAS
api.use("/api", userRouter, searchRouter, verifyRouter);

api.listen(port, () => {
  console.log("http://localhost:" + port);
});
