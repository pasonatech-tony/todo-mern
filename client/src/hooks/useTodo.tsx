import { useState, useEffect } from 'react';
import { ulid } from 'ulid';

import * as todoData from '../apis/todos';
import { Todo } from '../types/Todo';

export const useTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    todoData.getAllTodosData().then((todo) => {
      console.log(...todo);
      setTodoList([...todo].reverse());
    });
  }, []);

  //toggle function to update todo status
  const toggleTodoListItemStatus = (id: string, done: boolean) => {
    const todoItem = todoList.find((item: Todo) => item._id === id);

    //toggle status of item selected
    const newTodoItem: Todo = { ...todoItem!, done: !done };

    //update api
    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      //if success, update todolist; update the matching id with updatedTodo returned from the server
      const newTodoList = todoList.map((item) =>
        item._id !== updatedTodo.id ? item : updatedTodo,
      );

      //set the new todo list
      setTodoList(newTodoList);
    });
  };

  //add 1 todo item to todolist
  const addTodoListItem = (todoContent: string) => {
    //create a new item
    const newTodoItem = {
      _id: ulid(),
      content: todoContent,
      done: false,
    };

    // call to server by POST request
    todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    });
  };

  //delete 1 todo item from todolist
  const deleteTodoListItem = (id: string) => {
    todoData.deleteTodoData(id).then((deletedId) => {
      const newTodoList = todoList.filter((item) => item._id !== deletedId);
      setTodoList(newTodoList);
    });
  };

  //return todoList, toogle function, add, and delete function
  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  };
};
