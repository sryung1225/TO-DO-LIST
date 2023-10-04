import { useRecoilValue, useSetRecoilState } from "recoil";
import { CATE, IToDo, customCategoryAtom, toDoAtom } from "../atoms";

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

  return (
    <li>
      <span>{text}</span>
      {Object.values(CATE).map((current) => (
        <button
          key={current}
          name={current}
          onClick={changeCategory}
          style={{
            display: category === current ? "none" : "inline-block",
          }}
        >
          {current}
        </button>
      ))}
      {customCategories.map((current) => (
        <button
          key={current.text}
          name={current.text}
          onClick={changeCategory}
          style={{
            display: category === current.text ? "none" : "inline-block",
          }}
        >
          {current.text}
        </button>
      ))}
      {}
    </li>
  );
}

export default ToDo;
