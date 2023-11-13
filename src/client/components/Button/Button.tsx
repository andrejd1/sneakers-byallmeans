import { forwardRef } from "react";
import { ButtonTypes } from "./Button.types";
import { StyledButton } from "./Button.styled";
import Icon from "../Icon/Icon";
import Typography from "../Typography/Typography";

const Button = forwardRef<HTMLButtonElement, ButtonTypes.ButtonProps>(
  ({ variant, label, icon, isActive, ...props }, ref) => {
    const resolveButtonLabel = () => {
      if (icon) {
        if (!icon.align || icon.align === "left") {
          return (
            <>
              <Icon name={icon.name} color={icon.color} />
              <Typography variant={"button"}>{label}</Typography>
            </>
          );
        }
        return (
          <>
            <Typography variant={"button"}>{label}</Typography>
            <Icon name={icon.name} color={icon.color} />
          </>
        );
      }
      return <Typography variant={"button"}>{label}</Typography>;
    };

    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $iconAlign={icon?.align}
        $isActive={isActive}
        $size={props.size}
        onClick={props.onClick}
        {...props}
      >
        {resolveButtonLabel()}
      </StyledButton>
    );
  },
);

export default Button;
