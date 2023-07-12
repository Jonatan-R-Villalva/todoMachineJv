import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import TodoSearch from "../components/TodoSearch/TodoSearch";
export default function AppUi({
  completeTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  completedTodos,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <>
      <TodoCounter completed={completeTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error...</p>}
        {!loading && searchTodos.length === 0 && <p>no hay elementos</p>}
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
