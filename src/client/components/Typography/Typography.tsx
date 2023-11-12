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

const Typography: FC<TypographyTypes> = ({ variant, children, style }) => {
  switch (variant) {
    case "h1":
      return <H1 style={style}>{children}</H1>;
    case "h2":
      return <H2 style={style}>{children}</H2>;
    case "h3":
      return <H3 style={style}>{children}</H3>;
    case "subhead":
      return <Subhead style={style}>{children}</Subhead>;
    case "button":
      return <ButtonText style={style}>{children}</ButtonText>;
    case "copy":
      return <CopyText style={style}>{children}</CopyText>;
    case "label":
      return <Label style={style}>{children}</Label>;
    default:
      return <Label style={style}>{children}</Label>;
  }
};

export default Typography;
