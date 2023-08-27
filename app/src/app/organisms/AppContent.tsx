import { Grid } from "@mui/material";
import Card from "../molecules/Card";
import Button from "../atoms/Button";
import { useState } from "react";

function AppContent() {
  const [paid, setPaid] = useState(false);

  const onButtonClick = () => {
    setPaid(!paid);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      pt={5}
      px={{ sm: 5, md: 50 }}
    >
      {[...Array(9)].map((_, i) => (
        <Card
          key={i}
          className="mt-7"
          title={`Title #${i}`}
          description="Super description of how to use this shit"
        >
          <Button
            color={paid ? "success" : "warning"}
            label={paid ? "Pago" : "Pendente"}
            fullWidth={true}
            onClick={onButtonClick}
          />
        </Card>
      ))}
    </Grid>
  );
}

export default AppContent;
