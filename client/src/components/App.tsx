import { useRef, useState } from 'react';
import './App.css';
import { useTodo } from '../hooks/useTodo';
import { Todo } from '../types/Todo';
import { TodoTitle } from './TodoTitle';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

function App() {
  const {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem,
  } = useTodo();

  const inputEl = useRef<HTMLTextAreaElement>(null);
  const handleAddTodoItem = () => {
    if (inputEl.current?.value === '') {
      return;
    }
    addTodoListItem(inputEl.current!.value);
    inputEl.current!.value = '';
  };

  const incompletedList = todoList.filter((todo: Todo) => !todo.done);
  const completedList = todoList.filter((todo: Todo) => todo.done);

  return (
    <div className="App">
      <div className="App">
        <TodoTitle title="TODO APP" as="h1" />
        <TodoAdd
          buttonText="+ Add TODO"
          inputEl={inputEl}
          handleAddTodoItem={handleAddTodoItem}
        />
        <TodoList
          todoList={incompletedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="Incomplete TODO list"
          as="h2"
        />
        <TodoList
          todoList={completedList}
          toggleTodoListItemStatus={toggleTodoListItemStatus}
          deleteTodoListItem={deleteTodoListItem}
          title="Completed TODO list"
          as="h2"
        />
      </div>
    </div>
  );
}

export default App;
