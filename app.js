import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { test } from "./backend/controllers/alumnos.controllers.js";dotenv.config();

mongoose.connect(process.env.url_bd)
    .then(() => console.log("Funcionó la base de datos"))
    .catch((error) => console.log("Algo falló", error));
const app = express();
app.use(cors());
app.listen(4000, () => console.log("Funciona el servidor en puerto 4000"));
test();