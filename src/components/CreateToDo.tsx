import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoAtom } from "../atoms";

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TO_DO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a to do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

interface IForm {
  toDo: string;
}

export default CreateToDo;
