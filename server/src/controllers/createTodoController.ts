import { Request, Response } from "express";
import Todo from "../models/Todo";

export async function createTodoController(req: Request, res: Response) {
  const newTodo = new Todo({
    content: req.body.content,
    done: false,
  });
  const createdTodo = await newTodo.save();
  res.json(createdTodo);
}
