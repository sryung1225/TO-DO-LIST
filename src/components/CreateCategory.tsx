import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { customCategoryAtom } from "../atoms";

function CreateCategory() {
  const setCustomCategories = useSetRecoilState(customCategoryAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ customCategory }: IForm) => {
    setCustomCategories((oldCategories) => [
      ...oldCategories,
      { text: customCategory },
    ]);
    setValue("customCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("customCategory", {
          required: "Please write a category",
        })}
        placeholder="Write a category"
      />
      <button>Add</button>
    </form>
  );
}

interface IForm {
  customCategory: string;
}

export default CreateCategory;
