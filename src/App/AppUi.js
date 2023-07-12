import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton";
import EmptyTodos from "../components/EmptyTodos/EmptyTodos";
import TodoCounter from "../components/TodoCounter/TodoCounter";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoList from "../components/TodoList/TodoList";
import TodoSearch from "../components/TodoSearch/TodoSearch";
import TodosError from "../components/TodosError/TodosError";
import TodosLoading from "../components/TodosLoading/TodosLoading";
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
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchTodos.length === 0 && <EmptyTodos />}
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
