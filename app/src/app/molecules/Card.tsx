import { ReactNode } from "react";
import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface CardProps {
  className?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

function Card({ className, title, description, children }: CardProps) {
  return (
    <CardMUI sx={{ width: 345 }} className={className}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {children && <div className="mt-10">{children}</div>}
      </CardContent>
    </CardMUI>
  );
}

export default Card;
