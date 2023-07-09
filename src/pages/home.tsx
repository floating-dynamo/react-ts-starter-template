import WavingHandIcon from "@mui/icons-material/WavingHand";
import { Grid, Typography } from "@mui/material";

const { VITE_GREET } = import.meta.env;

const Home = () => {
    return (
        <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', p: 5}}>
            <Typography variant="h3">
                { VITE_GREET } <WavingHandIcon />
            </Typography>
        </Grid>
    );
};

export default Home;
