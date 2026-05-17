import { TodoListWrapper } from "@/components/todo-list/todo-list-wrapper";
import { TodoSearchBar } from "@/components/todo-search/todo-search-bar";
import { TodoItem } from "@/types/todo-items";

const TODO_LIST_MOCK: TodoItem[] = [
  {
    id: 1,
    tenantId: "23-9999",
    name: "할 일1",
    memo: null,
    imageUrl: null,
    isCompleted: false,
  },
  {
    id: 2,
    tenantId: "23-9999",
    name: "할 일2",
    memo: null,
    imageUrl: null,
    isCompleted: true,
  },
];

function TodoListPage() {
  return (
    <div className="mx-10 flex flex-col items-center justify-center gap-10 py-6">
      <TodoSearchBar />
      <div className="flex w-full max-w-300 gap-6">
        <TodoListWrapper type="todo" list={TODO_LIST_MOCK} />
        <TodoListWrapper type="done" list={[]} />
      </div>
    </div>
  );
}

export default TodoListPage;
