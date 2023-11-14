import { SneakerInput } from "../../types/sneakers";

export type SneakerFormProps = {
  onCreateSneaker: (newSneaker: SneakerInput) => void;
  onUpdateSneaker?: (sneakerId: string, updatedSneaker: SneakerInput) => void;
  onDeleteSneaker?: (sneakerId: string) => void;
};
