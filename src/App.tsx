import { Grid, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import "./App.css";

const { VITE_GREET } = import.meta.env;

function App() {
    return (
        <Grid>
            <Typography variant="h3">
                { VITE_GREET } <WavingHandIcon />
            </Typography>
        </Grid>
    );
}

export default App;
