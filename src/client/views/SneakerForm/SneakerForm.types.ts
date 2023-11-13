import { SneakerInput } from "../../types/sneakers";

export type SneakerFormProps = {
  sneaker?: SneakerInput;
  onCreateSneaker: (newSneaker: SneakerInput) => void;
};
