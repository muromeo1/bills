import { ReactNode } from "react";
import CardMUI from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BillType } from "../api/bills/route";
import { Box } from "@mui/material";
import { capitalize } from "lodash";

interface CardProps {
  className?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  bill?: BillType;
}

const currentMonth = new Date().getMonth();
const nextMonth = new Date().getMonth() + 1;

function Card({ className, title, description, children, bill }: CardProps) {
  return (
    <CardMUI sx={{ width: 345 }} className={className}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {bill && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>Quem: {capitalize(bill.who)}</Box>
            <Box>
              Vence em: {bill.due_to}/{nextMonth}
            </Box>
            <Box>Valor: R$ {bill.value}</Box>
            <Box>
              Pago em: {bill.paid_on}
              {bill.paid_on ? `/${currentMonth}` : ""}
            </Box>
          </Box>
        )}

        {children && <div className="mt-10">{children}</div>}
      </CardContent>
    </CardMUI>
  );
}

export default Card;
