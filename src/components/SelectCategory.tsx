import { useRecoilState, useRecoilValue } from "recoil";
import { CATE, categoryAtom, customCategoryAtom } from "../atoms";

function SelectCategory() {
  const customCategories = useRecoilValue(customCategoryAtom);
  const [categories, setCategories] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategories(event.currentTarget.value as any);
  };
  return (
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
  );
}

export default SelectCategory;
