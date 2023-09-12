import { IToDo } from "../atoms";

function ToDo({ text, category }: IToDo) {
  const changeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    console.log(name);
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
