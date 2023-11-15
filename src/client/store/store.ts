import { observable } from "@legendapp/state";
import { Sneaker } from "../types/sneakers";
import { SneakerSort } from "../enums/sneakers";

export const state$ = observable({
  UI: {
    activeSort: SneakerSort.yearUp as SneakerSort,
    isSneakerFormVisible: false as boolean,
    activeSneaker: null as Sneaker | null,
    searchValue: undefined as string | undefined,
  },
  searchSneakers: [] as Sneaker[],
  sneakers: [] as Sneaker[],
});
