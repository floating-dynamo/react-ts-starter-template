import { Grid, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import "./App.css";

function App() {
  return (
    <Grid>
      <Typography variant="h3">
        {import.meta.env.VITE_GREET} <WavingHandIcon />
      </Typography>
    </Grid>
  );
}

export default App;
