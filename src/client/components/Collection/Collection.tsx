import React from "react";
import { CollectionProps } from "../../types/sneakers";
import Typography from "../Typography/Typography";
import SortPanel from "./SortPanel/SortPanel";

const Collection: React.FC<CollectionProps> = ({
  sneakers,
  onDeleteSneaker,
}) => {
  if (sneakers.length === 0) {
    return (
      <div>
        <Typography variant="h1">Sneaker Collection</Typography>
        <Typography variant="h3">No sneakers found</Typography>
      </div>
    );
  }

  return (
    <>
      <SortPanel />
      <div>
        <ul>
          {sneakers.map((sneaker) => (
            <li key={sneaker._id}>
              {sneaker.name} - {sneaker.brand} - {sneaker.price} -{" "}
              {sneaker.size} - {sneaker.year}
              <button onClick={() => onDeleteSneaker(sneaker._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Collection;
