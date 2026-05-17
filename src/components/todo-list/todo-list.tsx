import { TodoItem } from "@/types/todo-items";

import { TodoCheckbox } from "./todo-checkbox";

type TodoListProps = Pick<TodoItem, "id" | "name">;

export function TodoList({ id, name }: TodoListProps) {
  return (
    <div className="group flex w-full items-center gap-4 rounded-full px-3 py-2 outline-2 outline-slate-900 has-checked:bg-violet-100">
      <TodoCheckbox id={id.toString()} />
      <label
        htmlFor={id.toString()}
        className="cursor-pointer text-base font-normal group-has-checked:line-through"
      >
        {name}
      </label>
    </div>
  );
}
