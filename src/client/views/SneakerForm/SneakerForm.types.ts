import { SneakerInput } from "../../types/sneakers";

export type SneakerFormProps = {
  onCreateSneaker: (newSneaker: SneakerInput) => void;
};
