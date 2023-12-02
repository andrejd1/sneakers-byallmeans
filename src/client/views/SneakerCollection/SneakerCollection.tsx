import React from "react";
import CollectionHeader from "../../components/Collection/Header/Header";
import Collection from "../../components/Collection/Collection";
import { useSneakerContext } from "../../context/SneakerProvider";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const SneakerCollection: React.FC = () => {
  const { error, isLoading } = useSneakerContext();

  if (error) {
    return (
      <Error
        title={"Oh no! Failed to load data :("}
        message={`We were unable to load the data...`}
      />
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <CollectionHeader />
      <Collection />
    </>
  );
};

export default SneakerCollection;
