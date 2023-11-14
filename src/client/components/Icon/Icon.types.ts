import { MouseEvent } from "react";
import { ThemeColors } from "../../ui/theme/colors";

export namespace IconTypes {
  export type Variants =
    | "calendar"
    | "chevron-down"
    | "chevron-up"
    | "close"
    | "dollar-sign"
    | "plus"
    | "search"
    | "size"
    | "star-empty"
    | "star-empty-small"
    | "star-filled"
    | "star-filled-small"
    | "trash";
}

export type IconProps = {
  name?: IconTypes.Variants | null;
  color?: ThemeColors;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
};
