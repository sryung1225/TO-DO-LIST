import { useRecoilState, useRecoilValue } from "recoil";
import { CATE, categoryAtom, customCategoryAtom } from "../atoms";
import * as S from "../styles/components/SelectStyle";

function SelectCategory() {
  const customCategories = useRecoilValue(customCategoryAtom);
  const [categories, setCategories] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategories(event.currentTarget.value as any);
  };
  return (
    <S.Wrapper>
      <S.Select value={categories} onInput={onInput}>
        <S.Option disabled selected>
          상태 선택 😶
        </S.Option>
        {Object.values(CATE).map((category) => (
          <S.Option key={category} value={category}>
            {category}
          </S.Option>
        ))}
        {customCategories?.map((category) => (
          <S.Option key={category.text} value={category.text}>
            {category.text}
          </S.Option>
        ))}
      </S.Select>
    </S.Wrapper>
  );
}

export default SelectCategory;
