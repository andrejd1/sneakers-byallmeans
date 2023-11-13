import React from "react";
import CollectionHeader from "../../components/Collection/Header/Header";
import Collection from "../../components/Collection/Collection";
import { SneakerCollectionTypes } from "./SneakerCollection.types";

const SneakerCollection: React.FC<SneakerCollectionTypes> = ({
  onDeleteSneaker,
}) => {
  return (
    <>
      <CollectionHeader />
      <Collection onDeleteSneaker={onDeleteSneaker} />
    </>
  );
};

export default SneakerCollection;
