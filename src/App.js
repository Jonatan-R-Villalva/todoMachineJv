import React, { useState } from "react";
import "./App.css";
import CreateTodoButton from "./components/CreateTodoButton/CreateTodoButton";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoList from "./components/TodoList/TodoList";
import TodoSearch from "./components/TodoSearch/TodoSearch";

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };
  return [item, saveItem];
};

function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completeTodos = todos.filter((todo) => !!todo.complete).length;
  const totatTodos = todos.length;
  const searchTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completedTodos = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].complete = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <>
      <TodoCounter completed={completeTodos} total={totatTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchTodos.map((e) => (
          <TodoItem
            key={e.text}
            text={e.text}
            completed={e.complete}
            onComplete={() => completedTodos(e.text)}
            onDelete={() => deleteTodo(e.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
