export type Sneaker = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  size: number;
  year: number;
  rate?: number;
};

export type SneakerInput = Omit<Sneaker, "_id" | "onDeleteSneaker">;
