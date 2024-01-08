"use client";
import { completeTodo } from "@/utils/actions";
import React, { useTransition } from "react";

const Todo = ({ todo }: any) => {
  const [isPendng, startTransition] = useTransition();
  return (
    <div
      className={`border border-green-700 cursor-pointer ${
        todo.completed ? "line-through text-red-700" : ""
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
