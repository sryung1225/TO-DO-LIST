import { useRecoilState, useRecoilValue } from "recoil";
import { CATE, categoryAtom, customCategoryAtom, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const customCategories = useRecoilValue(customCategoryAtom);
  const [categories, setCategories] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategories(event.currentTarget.value as any);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={categories} onInput={onInput}>
        {Object.values(CATE).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
        {customCategories?.map((category) => (
          <option key={category.text} value={category.text}>
            {category.text}
          </option>
        ))}
      </select>
      <CreateCategory />
      <CreateToDo />
      <ul>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
