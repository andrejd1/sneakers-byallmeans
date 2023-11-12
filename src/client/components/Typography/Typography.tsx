import { TypographyTypes } from "./Typography.types";
import {
  ButtonText,
  CopyText,
  H1,
  H2,
  H3,
  Label,
  Subhead,
} from "./Typography.styled";
import { FC } from "react";

const Typography: FC<TypographyTypes> = ({ variant, children }) => {
  switch (variant) {
    case "h1":
      return <H1>{children}</H1>;
    case "h2":
      return <H2>{children}</H2>;
    case "h3":
      return <H3>{children}</H3>;
    case "subhead":
      return <Subhead>{children}</Subhead>;
    case "button":
      return <ButtonText>{children}</ButtonText>;
    case "copy":
      return <CopyText>{children}</CopyText>;
    case "label":
      return <Label>{children}</Label>;
    default:
      return <Label>{children}</Label>;
  }
};

export default Typography;
