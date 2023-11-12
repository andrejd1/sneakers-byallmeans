import { forwardRef } from "react";
import { ButtonTypes } from "./Button.types";
import { StyledButton } from "./Button.styled";
import Icon from "../Icon/Icon";

const Button = forwardRef<HTMLButtonElement, ButtonTypes.ButtonProps>(
  ({ variant, label, icon, isActive, ...props }, ref) => {
    const resolveButtonLabel = () => {
      if (icon) {
        if (!icon.align || icon.align === "left") {
          return (
            <>
              <Icon name={icon.name} color={icon.color} />
              {label}
            </>
          );
        }
        return (
          <>
            {label}
            <Icon name={icon.name} color={icon.color} />
          </>
        );
      }
      return <>label</>;
    };

    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $iconAlign={icon?.align}
        $isActive={isActive}
        $size={props.size}
        {...props}
      >
        {resolveButtonLabel()}
      </StyledButton>
    );
  },
);

export default Button;
