import { createContext, useState } from "react";
import { useLocalStorage } from "./LocalStorage";

export const Context = createContext();

export function ContextProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const completeTodos = todos.filter((todo) => !!todo.complete).length;
  const totalTodos = todos.length;
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
    <Context.Provider
      value={{
        completeTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completedTodos,
        deleteTodo,
        loading,
        error,
      }}
    >
      {children}
    </Context.Provider>
  );
}
