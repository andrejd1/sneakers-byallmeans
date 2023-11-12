import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import { StyledSortPanel } from "./SortPanel.styled";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { breakpointSize } from "../../../ui/theme/breakpoints";
import { SortPanelProps } from "./SortPanel.types";

const SortPanel: React.FC<SortPanelProps> = ({ sortBy, setSortBy }) => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;
  const isSortedByYear = sortBy === "year";
  const isSortedBySize = sortBy === "size";
  const isSortedByPrice = sortBy === "price";

  return (
    <StyledSortPanel>
      {!isTablet && <Typography variant="label">Sort by:</Typography>}
      <Button
        variant={isSortedByYear ? "primary" : "secondary"}
        size={"small"}
        label={"Oldest Year"}
        icon={{
          name: "calendar",
          color: isSortedByYear ? "White" : "Black",
        }}
        onClick={() => setSortBy("year")}
        isActive={isSortedByYear}
      />
      <Button
        variant={isSortedBySize ? "primary" : "secondary"}
        size={"small"}
        label={"Smallest Size"}
        icon={{
          name: "size",
          color: isSortedBySize ? "White" : "Black",
        }}
        onClick={() => setSortBy("size")}
        isActive={isSortedBySize}
      />
      <Button
        variant={isSortedByPrice ? "primary" : "secondary"}
        size={"small"}
        label={"Lowest Price"}
        icon={{
          name: "dollar-sign",
          color: isSortedByPrice ? "White" : "Black",
        }}
        onClick={() => setSortBy("price")}
        isActive={isSortedByPrice}
      />
    </StyledSortPanel>
  );
};

export default SortPanel;
