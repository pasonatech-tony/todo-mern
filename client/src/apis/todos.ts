import axios from 'axios';
import { Todo } from '../types/Todo';
import { API_URL } from './config';

//get all todo
export const getAllTodosData = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// add 1 todo
export const addTodoData = async (todo: Todo) => {
  const response = await axios.post(API_URL, todo);
  return response.data;
};

// delete 1 todo
export const deleteTodoData = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};

// update 1 todo
export const updateTodoData = async (id: string, todo: Todo) => {
  const response = await axios.put(`${API_URL}/${id}`, todo);
  return response.data;
};
