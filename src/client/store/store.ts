import { observable } from "@legendapp/state";
import { Sneaker } from "../types/sneakers";
import { SneakerSort } from "../enums/sneakers";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";

enableReactTracking({ auto: true });

export const state$ = observable({
  UI: {
    activeSort: SneakerSort.yearUp as SneakerSort,
    isSneakerFormVisible: false as boolean,
    activeSneaker: null as Sneaker | null,
    searchValue: "" as string,
    isDropdownButtonOpen: false as boolean,
  },
  searchSneakers: [] as Sneaker[],
  sneakers: [] as Sneaker[],
});
