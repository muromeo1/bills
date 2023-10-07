import { BillType } from "../api/bills/route";
import { capitalize } from "lodash";
import { useEffect, useState } from "react";
import axios from "axios";

import Grid from "../atoms/Grid";
import Card from "../atoms/Card";
import PayBillButton from "../molecules/PayBillButton";

const AppContent = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get("/api/bills", { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();

  const paidOn = (paidOn: string) => {
    if (!paidOn) return "-";

    return paidOn;
  };

  if (!data) return null;

  return (
    <Grid>
      {data?.map((bill: BillType) => (
        <Card key={bill.id}>
          <Card.Header>{bill.title}</Card.Header>
          <Card.Body>
            <Card.Item title="Pagador" content={capitalize(bill.who)} />
            <Card.Item
              title="Vence em"
              content={`${bill.due_to}/${currentMonth}`}
            />
            <Card.Item title="Valor" content={`R$ ${bill.value}`} />
            <Card.Item title="Pago em" content={paidOn(bill.paid_on)} />
          </Card.Body>

          <PayBillButton bill={bill} fetchData={fetchData} />
        </Card>
      ))}
    </Grid>
  );
};

export default AppContent;
