import express from "express";
import {
  createSystem,
  deleteSystem,
  getSystems,
} from "../controllers/systems.js";
const systemsRouter = express.Router();

//Get
systemsRouter.get("/", getSystems); // Lấy dữ liệu theo các params

systemsRouter.get("/insert", createSystem); // Lấy dữ liệu theo các params

systemsRouter.delete("/delete/:id", deleteSystem); // Lấy dữ liệu theo các params

export default systemsRouter;
