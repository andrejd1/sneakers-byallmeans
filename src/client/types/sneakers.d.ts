import { SneakerCollectionTypes } from "../views/SneakerCollection/SneakerCollection.types";

export type Sneaker = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  size: number;
  year: number;
  rate?: number;
} & SneakerCollectionTypes;

export type SneakerInput = Omit<Sneaker, "_id" | "onDeleteSneaker">;
export type SneakerSort = Omit<SneakerInput, "name" | "brand" | "rate">;
