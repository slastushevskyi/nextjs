import TodoList from "@/components/TodoList";
import db from "@/utils/db";

const getData = async () => {
  await new Promise((resolve) => resolve());
  const todos = await db.todo.findMany();
  console.log(todos);
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();
  return (
    <div>
      Todos page
      <TodoList todos={todos} />
    </div>
  );
};

export default TodosPage;
