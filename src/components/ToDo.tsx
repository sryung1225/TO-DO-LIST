import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoAtom } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoAtom);
  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { id, text, category: name as any };
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
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={changeCategory}>
          DOING
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={changeCategory}>
          TO DO
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={changeCategory}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
