import { ReactNode } from "react";
import { StyledContainer } from "./Container.styled";

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
