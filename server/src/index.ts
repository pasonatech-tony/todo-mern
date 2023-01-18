import { Request, Response } from "express";

const express = require("express");
const mongoose = require("mongoose");
import cors from "cors";
import { createTodoController } from "./controllers/createTodoController";
import { getAllTodosController } from "./controllers/getAllTodosController";
import { deleteTodoController } from "./controllers/deleteTodoController";
import { updateTodoController } from "./controllers/updateTodoController";
require("dotenv").config();

const app = express();
const port = 3100;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

//declare route controllers
app.post("/", createTodoController);
app.get("/", getAllTodosController);
app.delete("/:id", deleteTodoController);
app.put("/:id", updateTodoController);

//mongo
main().catch((err) => console.log(err));
mongoose.set("strictQuery", true);
async function main() {
  await mongoose.connect(process.env.MONGO_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
