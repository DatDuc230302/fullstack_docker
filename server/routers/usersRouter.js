import express from "express";
import { createUser, deleteUser, getUsers } from "../controllers/users.js";
const usersRouter = express.Router();

//Get
usersRouter.get("/", getUsers); // Lấy dữ liệu theo các params

usersRouter.post("/", createUser); // Lấy dữ liệu theo các params

usersRouter.delete("/:_id", deleteUser); // Lấy dữ liệu theo các params

export default usersRouter;
