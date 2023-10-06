import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { customCategoryAtom } from "../atoms";
import * as S from "../styles/components/FormStyle";

function CreateCategory() {
  const setCustomCategories = useSetRecoilState(customCategoryAtom);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = ({ customCategory }: IForm) => {
    setCustomCategories((oldCategories) => [
      ...oldCategories,
      { text: customCategory },
    ]);
    setValue("customCategory", "");
  };
  return (
    <S.Form onSubmit={handleSubmit(handleValid)}>
      <S.Input
        {...register("customCategory", {
          required: "글자를 입력하고나서 추가 버튼을 눌러주세요.",
        })}
        type="text"
        placeholder="상태를 추가해주세요!"
      />
      <S.Button type="submit">
        <i className="a11y">상태 추가하기</i>
      </S.Button>
      <S.Valid>{errors?.customCategory?.message}</S.Valid>
    </S.Form>
  );
}

interface IForm {
  customCategory: string;
}

export default CreateCategory;
