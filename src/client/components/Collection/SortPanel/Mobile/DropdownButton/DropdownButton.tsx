import React from "react";
import Button from "../../../../Button/Button";
import { state$ } from "../../../../../store/store";
import { StyledDropdownButtonWrapper } from "./DropdownButton.styled";

const DropdownButton: React.FC = () => {
  const isDropdownOpen = state$.UI.isDropdownButtonOpen;

  return (
    <StyledDropdownButtonWrapper $isVisible={isDropdownOpen.get()}>
      <Button
        variant="secondary"
        size="small"
        label={`Sort by: ${state$.UI.activeSort.get()}`}
        isActive={false}
        icon={{
          name: "chevron-down",
          color: "Black",
          align: "right",
        }}
        onClick={() => isDropdownOpen.set(true)}
      />
    </StyledDropdownButtonWrapper>
  );
};

export default DropdownButton;
