import { useState } from "react";
import cn from "classnames";
import axios from "axios";

import { BillType } from "../api/bills/route";

interface PayBillButtonProps {
  bill: BillType;
  fetchData: () => void;
}

const PayBillButton = ({ bill, fetchData }: PayBillButtonProps) => {
  const [paid, setPaid] = useState(!!bill.paid_on);

  const label = paid ? "Pago" : "Pendente";

  const color = paid
    ? "bg-green-200 hover:bg-green-300 active:bg-green-400"
    : "bg-amber-200 hover:bg-amber-300 active:bg-amber-400";

  const onClick = (id: number, paid: boolean) => {
    axios
      .post(
        "/api/bills",
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
        "w-full md:h-[13vh] h-[15vh] bottom-0 cursor-pointer",
        "rounded-b-xl border-0",
        color
      )}
    >
      <div className="text-md text-black">{label}</div>
    </button>
  );
};

export default PayBillButton;
