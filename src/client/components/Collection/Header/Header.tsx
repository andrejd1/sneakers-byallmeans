import React from "react";
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
import {
  StyledAddNewSneakersButtonContainer,
  StyledHeader,
  StyledHeaderButtonsContainer,
} from "./Header.styled";
import { useDeviceSize } from "../../../hooks/useDeviceSize";
import { breakpointSize } from "../../../ui/theme/breakpoints";

const CollectionHeader: React.FC = () => {
  const { windowWidth } = useDeviceSize();
  const isTablet = windowWidth <= breakpointSize.tablet;

  return (
    <StyledHeader>
      <Typography variant={isTablet ? "h2" : "h1"}>Your collection</Typography>
      <StyledHeaderButtonsContainer>
        <div>Search form</div>
        <StyledAddNewSneakersButtonContainer>
          <Button
            variant={"primary"}
            size={"large"}
            label={"Add new sneakers"}
            isActive={false}
            icon={{
              name: "plus",
              color: "White",
            }}
          />
        </StyledAddNewSneakersButtonContainer>
      </StyledHeaderButtonsContainer>
    </StyledHeader>
  );
};

export default CollectionHeader;
