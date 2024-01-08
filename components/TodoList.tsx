import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos }: any) => {
  return (
    <div>
      {todos.map((todo: any) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
