import { postTodoItem } from "@/action/item";

import { TodoButton } from "../todo-button";

import { AddTodoInput } from "./add-todo-input";

export function AddTodoItemBar() {
  return (
    <form className="flex w-full max-w-300 gap-4" action={postTodoItem}>
      <AddTodoInput />
      <TodoButton actionType="add" />
    </form>
  );
}
