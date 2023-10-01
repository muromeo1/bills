import { ButtonProps as ButtonBaseProps } from "@mui/material";
import ButtonMUI from "@mui/material/Button";

interface ButtonProps {
  color: ButtonBaseProps["color"];
  label: string;
  icon?: string;
  fullWidth?: ButtonBaseProps["fullWidth"];
  onClick?: () => void;
  className?: string;
}

function Button({
  color,
  label,
  icon,
  fullWidth,
  onClick,
  className,
}: ButtonProps) {
  return (
    <ButtonMUI
      variant="contained"
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      className={className}
    >
      {icon}
      {label}
    </ButtonMUI>
  );
}

export default Button;
