import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "LocalToDos",
  storage: localStorage,
});

export enum CATE {
  "TO_DO" = "예정",
  "DOING" = "진행중",
  "DONE" = "완료",
}

export interface ICustomCategory {
  text: string;
}

export const categoryAtom = atom<CATE>({
  key: "category",
  default: CATE.TO_DO,
});

export const customCategoryAtom = atom<ICustomCategory[]>({
  key: "customCategory",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export interface IToDo {
  id: number;
  text: string;
  category: string;
}

export const toDoAtom = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoAtom);
    const category = get(categoryAtom);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
