import { Grid, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import { Stack } from "@mui/system";


const MainBar = () => {

    return (
        <Grid sx={{
            height: '100vh',
        }} item md={7} xs={12}>
            <Stack sx={{
                height: '60vh'
            }} />
            <Stack direction="row" sx={{
                paddingLeft : '25%'
                
            }}>
                <Typography variant="h1" sx={{
                    color : 'white'
                }}>
                    60°
                </Typography>
            </Stack>

        </Grid>
    )
}

export default MainBar