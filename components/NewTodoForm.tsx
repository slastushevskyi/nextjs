import { newTodo } from "@/utils/actions";

const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-blue-500 text-black"
        />
        <button type="submit">Add todo!</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
