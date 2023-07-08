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
  { text: "lalalalala", complete: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={15} total={25} />
      <TodoSearch />
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
