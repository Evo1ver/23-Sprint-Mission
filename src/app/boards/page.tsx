import { Badge } from "@/components/badge/badge";
import { TodoSearchBar } from "@/components/todo-search/todo-search-bar";

function TodoListPage() {
  return (
    <div className="mx-10 flex flex-col items-center justify-center gap-10 py-6">
      <TodoSearchBar />
      <div className="flex w-full max-w-300 gap-6">
        <div className="w-full">
          <Badge type="todo" />
        </div>
        <div className="w-full">
          <Badge type="done" />
        </div>
      </div>
    </div>
  );
}

export default TodoListPage;
