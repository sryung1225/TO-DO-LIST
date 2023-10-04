import { useRecoilValue, useSetRecoilState } from "recoil";
import { CATE, IToDo, customCategoryAtom, toDoAtom } from "../atoms";
import * as S from "../styles/components/ToDoStyle";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoAtom);
  const customCategories = useRecoilValue(customCategoryAtom);
  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteCategory = () => {
    setToDos((oldToDos) => {
      return oldToDos.filter((toDo) => toDo.id !== id);
    });
  };

  return (
    <S.Item>
      <S.Text>{text}</S.Text>
      {Object.values(CATE).map((current) => (
        <S.Button
          key={current}
          name={current}
          onClick={changeCategory}
          style={{
            display: category === current ? "none" : "inline-block",
          }}
        >
          {current}
        </S.Button>
      ))}
      {customCategories.map((current) => (
        <S.Button
          key={current.text}
          name={current.text}
          onClick={changeCategory}
          style={{
            display: category === current.text ? "none" : "inline-block",
          }}
        >
          {current.text}
        </S.Button>
      ))}
      <S.DeleteButton onClick={deleteCategory}>삭제</S.DeleteButton>
    </S.Item>
  );
}

export default ToDo;
