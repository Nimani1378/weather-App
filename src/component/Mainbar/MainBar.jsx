import { Grid,Typography } from "@mui/material";
import { red } from '@mui/material/colors';


const MainBar = () => {

    return(
        <Grid sx={{
            bgcolor : 'primary.dark'
        }} item md={7} xs={12}>
            <Typography >
                MainBAr
            </Typography>
        </Grid>
    )
}

export default MainBar