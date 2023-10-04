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
      {Object.values(CATE).map((currentCategory) => (
        <button
          name={currentCategory}
          onClick={changeCategory}
          style={{
            display: category === currentCategory ? "none" : "inline-block",
          }}
        >
          {currentCategory}
        </button>
      ))}
      {customCategories.map((customCategory) => (
        <button
          name={customCategory.text}
          onClick={changeCategory}
          style={{
            display: category === customCategory.text ? "none" : "inline-block",
          }}
        >
          {customCategory.text}
        </button>
      ))}
      {}
    </li>
  );
}

export default ToDo;
