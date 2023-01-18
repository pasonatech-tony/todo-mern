import { Request, Response } from "express";
import Todo from "../models/Todo";

export async function deleteTodoController(req: Request, res: Response) {
  const todo= await Todo.findById(req.params.id);
  await todo.remove();
  res.json(todo);
}