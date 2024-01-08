import NewTodoForm from "@/components/NewTodoForm";

const DasboardLayout = ({ children }: any) => {
  return (
    <div>
      <h1>This is the test dashboard</h1>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  );
};

export default DasboardLayout;
