import { Fab } from "@mui/material";
import { ButtonProps as ButtonBaseProps } from "@mui/material";

interface ButtonProps {
  color: ButtonBaseProps["color"];
  label: string;
  icon?: string;
}

function Button({ color, label, icon }: ButtonProps) {
  return (
    <Fab color={color} variant="extended">
      {icon}
      {label}
    </Fab>
  );
}

export default Button;
