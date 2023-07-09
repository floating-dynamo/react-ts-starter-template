import { Grid, Typography } from "@mui/material";

const NotFound = () => {
    return (
        <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: '80vh'}}>
            <Typography variant="h2">Sorry, this page does not exist</Typography>
        </Grid>
    );
};

export default NotFound;
