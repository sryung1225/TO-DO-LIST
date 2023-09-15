import { useSetRecoilState } from "recoil";
import { IToDo, toDoAtom } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetRecoilState(toDoAtom);
  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
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
      {category !== "DOING" && (
        <button name="DOING" onClick={changeCategory}>
          DOING
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={changeCategory}>
          TO DO
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={changeCategory}>
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
