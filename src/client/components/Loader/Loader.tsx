import LoaderSvg from "../../assets/loader.svg";
import React from "react";
import { StyledLoader, StyledLoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderContainer>
      <StyledLoader src={LoaderSvg} alt="Loader" />
    </StyledLoaderContainer>
  );
};

export default Loader;
