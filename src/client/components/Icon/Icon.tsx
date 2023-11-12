import { IconProps, IconTypes } from "./Icon.types";
import { MissingIcon } from "./icons/MissingIcon";
import { CalendarIcon } from "./icons/CalendarIcon";
import { ChevronDownIcon } from "./icons/ChevronDownIcon";
import { ChevronUpIcon } from "./icons/ChevronUpIcon";
import { CloseIcon } from "./icons/CloseIcon";
import React from "react";
import { PlusIcon } from "./icons/PlusIcon";
import { DollarSignIcon } from "./icons/DollarSignIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { SizeIcon } from "./icons/SizeIcon";
import { StarEmptyIcon } from "./icons/StarEmptyIcon";
import { StarFilledIcon } from "./icons/StarFilledIcon";
import { TrashIcon } from "./icons/TrashIcon";

const Icon = ({ name, color, onClick }: IconProps) => {
  const iconProps: IconProps = {
    color,
    onClick,
  };

  const renderIcon = (name: IconTypes.Variants) => {
    switch (name) {
      case "calendar":
        return <CalendarIcon {...iconProps} />;
      case "chevron-down":
        return <ChevronDownIcon {...iconProps} />;
      case "chevron-up":
        return <ChevronUpIcon {...iconProps} />;
      case "close":
        return <CloseIcon {...iconProps} />;
      case "dollar-sign":
        return <DollarSignIcon {...iconProps} />;
      case "plus":
        return <PlusIcon {...iconProps} />;
      case "search":
        return <SearchIcon {...iconProps} />;
      case "size":
        return <SizeIcon {...iconProps} />;
      case "star-empty":
        return <StarEmptyIcon {...iconProps} />;
      case "star-filled":
        return <StarFilledIcon {...iconProps} />;
      case "trash":
        return <TrashIcon {...iconProps} />;
      default:
        return <MissingIcon {...iconProps} />;
    }
  };

  return name ? renderIcon(name) : <MissingIcon {...iconProps} />;
};

export default Icon;
