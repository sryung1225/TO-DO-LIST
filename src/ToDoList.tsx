import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(watch());
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("toDo1", { required: true, minLength: 10 })}
          placeholder="Write a to do 1"
        />
        <input
          {...register("toDo2", {
            required: "ToDo2 is required",
            minLength: { value: 10, message: "ToDo2 is too short" },
          })}
          placeholder="Write a to do 2"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
