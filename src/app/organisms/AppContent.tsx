import { Grid } from "@mui/material";
import Card from "../molecules/Card";
import Button from "../atoms/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { BillType } from "../api/bills/route";

function AppContent() {
  const [data, setData] = useState<BillType[]>([]);

  const fetchData = async () => {
    axios
      .get("/api/bills")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  const onButtonClick = (id: number, paid: boolean) => {
    axios
      .post(
        "/api/bills/",
        { id: id, paid: !paid },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      pt={5}
      px={{ sm: 5, md: 50 }}
    >
      {[...data].map((bill) => (
        <Card key={bill.id} className="mt-7" title={bill.title} bill={bill}>
          <Button
            color={bill.paid_on ? "success" : "warning"}
            label={bill.paid_on ? "Pago" : "Pagar"}
            fullWidth={true}
            onClick={() => {
              onButtonClick(bill.id, !!bill.paid_on);
            }}
          />
        </Card>
      ))}
    </Grid>
  );
}

export default AppContent;
