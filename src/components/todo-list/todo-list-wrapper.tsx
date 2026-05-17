import { Badge, type BadgeType } from "@/components/badge/badge";
import { TodoItem } from "@/types/todo-items";

import { DoneEmpty } from "./done-empty";
import { TodoEmpty } from "./todo-empty";
import { TodoList } from "./todo-list";

interface TodoListWrapperProps {
  type: BadgeType;
  list: TodoItem[];
}

export function TodoListWrapper({ type, list }: TodoListWrapperProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <Badge type={type} />
      {list.length > 0 ? (
        list.map((item) => (
          <TodoList key={item.id} id={item.id} name={item.name} />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center">
          {type === "todo" ? <TodoEmpty /> : <DoneEmpty />}
        </div>
      )}
    </div>
  );
}
