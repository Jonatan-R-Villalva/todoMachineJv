import React, { useState } from "react";
import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";

const defaultTodo = [
  { text: "cortar cebolla", complete: true },
  { text: "tomar el curso de react", complete: false },
  { text: "llorar con la llorona", complete: false },
  { text: "lalalalala", complete: true },
];

function App() {
  const [todo, setTodo] = useState(defaultTodo);
  const [searchValue, setSearchValue] = useState("");
  const completeTodos = todo.filter((todo) => !!todo.complete).length;
  const totatTodos = todo.length;
  return (
    <>
      <TodoCounter completed={completeTodos} total={totatTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {defaultTodo.map((e) => (
          <TodoItem key={e.text} text={e.text} completed={e.complete} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
