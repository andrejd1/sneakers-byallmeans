import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { StyledSortPanel } from "./SortPanel.styled";

const SortPanel: React.FC = () => {
  return (
    <StyledSortPanel>
      <Typography variant="label">Sort by:</Typography>
      <Button
        variant={"primary"}
        size={"small"}
        label={"Oldest Year"}
        icon={{
          name: "calendar",
          color: "White",
        }}
        isActive={true}
      />
      <Button
        variant={"secondary"}
        size={"small"}
        label={"Smallest Size"}
        icon={{
          name: "size",
          color: "Black",
        }}
        isActive={false}
      />
      <Button
        variant={"secondary"}
        size={"small"}
        label={"Lowest Price"}
        icon={{
          name: "dollar-sign",
          color: "Black",
        }}
        isActive={false}
      />
    </StyledSortPanel>
  );
};

export default SortPanel;
