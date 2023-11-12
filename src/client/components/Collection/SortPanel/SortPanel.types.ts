import { SneakerSort } from "../../../types/sneakers";

export type SortPanelProps = {
  sortBy?: keyof SneakerSort;
  setSortBy: (sortBy: keyof SneakerSort) => void;
};
