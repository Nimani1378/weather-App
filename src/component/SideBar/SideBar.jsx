import { Grid, Typography } from "@mui/material"

const SideBar = () => {

    return(
        <Grid item md={5} xs={12} xs={{
            height: '100vh',
            backgroundColor : 'white'
        }}>
            <Typography>
                Siedebar
            </Typography>
        </Grid>
    )
}

export default SideBar