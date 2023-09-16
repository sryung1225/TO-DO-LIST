import { atom, selector } from "recoil";

type categories = "TO_DO" | "DOING" | "DONE";

export interface IToDo {
  id: number;
  text: string;
  category: categories;
}

export const toDoAtom = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryAtom = atom<categories>({
  key: "category",
  default: "TO_DO",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoAtom);
    const category = get(categoryAtom);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
