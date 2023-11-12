import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { StyledSortPanel } from "./SortPanel.styled";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { breakpointSize } from "../../../ui/theme/breakpoints";

const SortPanel: React.FC = () => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;

  return (
    <StyledSortPanel>
      {!isTablet && <Typography variant="label">Sort by:</Typography>}
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
