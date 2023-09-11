import { useForm } from "react-hook-form";

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        "passwordConfirm",
        { message: "Password is different" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "Server is offline" });
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("password", {
            required: true,
            minLength: 10,
            maxLength: 20,
          })}
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordConfirm", {
            required: true,
          })}
        />
        <span>{errors?.passwordConfirm?.message}</span>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com email allowed",
            },
          })}
          placeholder="123@naver.com"
        />
        <span>{errors?.email?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

interface IFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  extraError?: string;
}

export default ToDoList;
