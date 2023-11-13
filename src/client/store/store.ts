import { observable } from "@legendapp/state";
import { Sneaker, SneakerSort } from "../types/sneakers";

export const state$ = observable({
  UI: {
    activeSort: "year" as keyof SneakerSort,
    isSneakerFormVisible: false as boolean,
  },
  sneakers: [] as Sneaker[],
});
