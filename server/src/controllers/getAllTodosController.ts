import Todo from "../models/Todo";
import { Request, Response } from "express";

export async function getAllTodosController(req: Request, res: Response) {
  const todos = await Todo.find();

  //send back the deck to ui
  res.json(todos);
}
