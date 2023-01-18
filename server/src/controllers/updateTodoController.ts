import { Request, Response } from "express";
import Todo from "../models/Todo";

export async function updateTodoController(req: Request, res: Response) {
  const todoId = req.params.id;
  const todo = await Todo.findById(todoId);
  if (!todo) return res.status(400).send("no deck of this id exists");
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
}
