import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const toDoAtom = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryAtom = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoAtom);
    const category = get(categoryAtom);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
