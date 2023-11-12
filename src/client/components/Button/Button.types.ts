import { IconTypes } from "../Icon/Icon.types";
import { ThemeColors } from "../../ui/theme/colors";

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
  };

  export type StyledButtonProps = {
    $variant: ButtonVariants;
    $iconAlign?: IconAlign;
    $isActive: boolean;
    $size: ButtonSize;
  };
}
