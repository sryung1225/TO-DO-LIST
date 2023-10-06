import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryAtom, toDoAtom } from "../atoms";
import * as S from "../styles/components/FormStyle";

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoAtom);
  const category = useRecoilValue(categoryAtom);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(errors);
  return (
    <S.ToDoForm onSubmit={handleSubmit(handleValid)}>
      <S.ToDoInput
        {...register("toDo", {
          required: "글자를 입력하고나서 추가 버튼을 눌러주세요.",
        })}
        type="text"
        placeholder="새로운 일을 추가해주세요!"
      />
      <S.ToDoButton type="submit">
        <i className="a11y">할 일 추가하기</i>
      </S.ToDoButton>
      <S.Valid>{errors?.toDo?.message}</S.Valid>
    </S.ToDoForm>
  );
}

interface IForm {
  toDo: string;
}

export default CreateToDo;
