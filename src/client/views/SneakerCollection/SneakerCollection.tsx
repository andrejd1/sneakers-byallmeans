import React from "react";
import { CollectionProps } from "../../types/sneakers";
import CollectionHeader from "../../components/Collection/Header/Header";
import Collection from "../../components/Collection/Collection";

const SneakerCollection: React.FC<CollectionProps> = ({
  sneakers,
  onDeleteSneaker,
}) => {
  return (
    <>
      <CollectionHeader />
      <Collection sneakers={sneakers} onDeleteSneaker={onDeleteSneaker} />
    </>
  );
};

export default SneakerCollection;
