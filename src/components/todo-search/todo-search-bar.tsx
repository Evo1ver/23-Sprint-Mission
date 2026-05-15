import { TodoSearchButton } from "./todo-search-button";
import { TodoSearchInput } from "./todo-search-input";

export function TodoSearchBar() {
  return (
    <div className="flex w-full max-w-300 gap-4">
      <TodoSearchInput />
      <TodoSearchButton />
    </div>
  );
}
