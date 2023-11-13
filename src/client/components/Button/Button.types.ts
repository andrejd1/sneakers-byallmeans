import { IconTypes } from "../Icon/Icon.types";
import { ThemeColors } from "../../ui/theme/colors";
import { MouseEventHandler } from "react";

export namespace ButtonTypes {
  export type ButtonVariants = "primary" | "secondary";
  type IconAlign = "left" | "right";
  type ButtonSize = "small" | "large";

  export type ButtonProps = {
    variant: ButtonVariants;
    size: ButtonSize;
    label: string;
    isActive: boolean;
    icon?: {
      name: IconTypes.Variants;
      color: ThemeColors;
      align?: IconAlign;
    };
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  };

  export type StyledButtonProps = {
    $variant: ButtonVariants;
    $iconAlign?: IconAlign;
    $isActive: boolean;
    $size: ButtonSize;
  };
}
