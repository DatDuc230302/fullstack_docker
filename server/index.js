import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mysql from "mysql2/promise";
import systemsRouter from "./routers/systemsRouter.js";
import mongoose from "mongoose";
import usersRouter from "./routers/usersRouter.js";

// Firebase

const app = express();
const PORT = 2303;
app.use(
  cors({
    origin: ["http://localhost:3000"], // URL frontend
    credentials: true, // Cho phép gửi cookie
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("<h1>HOHO</h1>"));

app.use("/api/systems", systemsRouter);
app.use("/api/users", usersRouter);

export let db;

async function connectMysql() {
  let retries = 10;
  while (retries) {
    try {
      db = await mysql.createConnection({
        host: "mysql",
        user: "root",
        password: "123456",
        database: "storage",
      });
      console.log("Kết nối MYSQL thành công");
      break;
    } catch (err) {
      console.log("Kết nối MYSQL không thành công, thử lại...");
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000)); // Chờ 5 giây trước khi thử lại
    }
  }
}

async function connectMongoDb() {
  let retries = 10;
  while (retries) {
    try {
      await mongoose.connect("mongodb://mongo:27017/storage");
      console.log("Kết nối MongoDB thành công");
      break;
    } catch (err) {
      console.log("Kết nối MongoDB không thành công, thử lại...");
      retries -= 1;
      await new Promise((res) => setTimeout(res, 5000)); // Chờ 5 giây trước khi thử lại
    }
  }
}

connectMongoDb();

connectMysql();

// Lắng nghe trên cổng 3000
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
