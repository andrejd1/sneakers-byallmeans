import React from "react";
import Button from "../../../../Button/Button";
import { state$ } from "../../../../../store/store";
import { StyledDropdownButtonWrapper } from "./DropdownButton.styled";
import { useSneakerContext } from "../../../../../context/SneakerProvider";

const DropdownButton: React.FC = () => {
  const isDropdownOpen = state$.UI.isDropdownButtonOpen;
  const { isLoading } = useSneakerContext();

  return (
    <StyledDropdownButtonWrapper $isVisible={isDropdownOpen.get()}>
      <Button
        variant="secondary"
        size="small"
        label={`Sort by: ${state$.UI.activeSort.get()}`}
        isActive={false}
        icon={{
          name: "chevron-down",
          color: isLoading ? "Gray50" : "Black",
          align: "right",
        }}
        disabled={isLoading}
        onClick={() => isDropdownOpen.set(true)}
      />
    </StyledDropdownButtonWrapper>
  );
};

export default DropdownButton;
