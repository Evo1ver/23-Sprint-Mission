import { TodoGnb } from "@/components/todo-gnb";

function TodoListLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TodoGnb />
      {children}
    </div>
  );
}

export default TodoListLayout;
