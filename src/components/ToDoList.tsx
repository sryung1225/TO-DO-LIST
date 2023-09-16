import { useRecoilState, useRecoilValue } from "recoil";
import { categoryAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {category === "TO_DO" &&
        toDo.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      {category === "DOING" &&
        doing.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
      {category === "DONE" &&
        done.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
    </div>
  );
}

export default ToDoList;
