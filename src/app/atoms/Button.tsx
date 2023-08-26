import { ButtonProps as ButtonBaseProps } from "@mui/material";
import ButtonMUI from "@mui/material/Button";

interface ButtonProps {
  color: ButtonBaseProps["color"];
  label: string;
  icon?: string;
}

function Button({ color, label, icon }: ButtonProps) {
  return (
    <ButtonMUI
      color={color}
      variant="contained"
      style={{ borderRadius: "35px" }}
    >
      {icon}
      {label}
    </ButtonMUI>
  );
}

export default Button;
