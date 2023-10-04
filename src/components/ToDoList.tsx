import { useRecoilValue } from "recoil";
import { categoryAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import SelectCategory from "./SelectCategory";
import * as S from "../styles/components/ToDoListStyle";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoryAtom);
  return (
    <S.Wrapper>
      <S.Title>오늘 할 일 ദ്ദി</S.Title>
      <S.Category>
        <SelectCategory />
        <CreateCategory />
      </S.Category>
      <CreateToDo />
      <S.Status>{categories}</S.Status>
      {toDos && toDos.length > 0 ? (
        <S.List>
          {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </S.List>
      ) : (
        <S.None>해당되는 상태의 일이 없어요 💧</S.None>
      )}
    </S.Wrapper>
  );
}

export default ToDoList;
