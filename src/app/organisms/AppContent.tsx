import { Grid } from "@mui/material";
import Card from "../molecules/Card";
import Button from "../atoms/Button";

function AppContent() {
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
          className="mt-9"
          title={`Title #${i}`}
          description="Super description of how to use this shit"
        >
          <Button color="primary" label="Damn son" />
        </Card>
      ))}
    </Grid>
  );
}

export default AppContent;
