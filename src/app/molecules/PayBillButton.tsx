import { useState } from "react";
import cn from "classnames";
import axios from "axios";

import { BillType, routes } from "../api/bills/route";

interface PayBillButtonProps {
  bill: BillType;
  fetchData: () => void;
}

const PayBillButton = ({ bill, fetchData }: PayBillButtonProps) => {
  const [paid, setPaid] = useState(!!bill.paid_on);

  const label = paid ? "Pago" : "Pendente";
  const color = paid ? "green" : "amber";

  const onClick = (id: number, paid: boolean) => {
    axios
      .post(
        routes.POST,
        { id: id, paid: paid },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        setPaid(paid);
        fetchData();
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  return (
    <button
      onClick={() => onClick(bill.id, !paid)}
      className={cn(
        `bg-${color}-200 hover:bg-${color}-300 active:bg-${color}-400`,
        "w-full h-12 bottom-0 cursor-pointer",
        "absolute rounded-b-xl border-0"
      )}
    >
      <div className={`text-md text-${color}-900`}>{label}</div>
    </button>
  );
};

export default PayBillButton;
