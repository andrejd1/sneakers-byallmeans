import { SneakerInput } from "../../types/sneakers";

export namespace SneakerFormTypes {
  export type StyledFormProps = {
    $scrollPosition: number;
  };
  export type SneakerFormProps = {
    onCreateSneaker: (newSneaker: SneakerInput) => void;
    onUpdateSneaker?: (sneakerId: string, updatedSneaker: SneakerInput) => void;
    onDeleteSneaker?: (sneakerId: string) => void;
  };
}
