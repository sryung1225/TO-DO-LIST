import { useRecoilState, useRecoilValue } from "recoil";
import {
  Categories,
  categoryAtom,
  customCategoryAtom,
  toDoSelector,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const customCategories = useRecoilValue(customCategoryAtom);
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        {customCategories?.map((category) => (
          <option value={category.text}>{category.text}</option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
