import { TodoSearchBar } from "@/components/todo-search/todo-search-bar";

function TodoListPage() {
  return (
    <div className="mx-10 flex flex-col items-center justify-center py-6">
      <TodoSearchBar />
    </div>
  );
}

export default TodoListPage;
