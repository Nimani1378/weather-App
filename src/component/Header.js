import {Button, Grid, Switch, Typography} from "@mui/material";
import { useContext } from "react";
import {ColorModeContext} from '../App';

const Header = () => {
    const {toggleColorMode} = useContext(ColorModeContext);
    return(
        <Grid item xs={12} textAlign={'center'}>
            <Typography variant={'h5'}>
                Weather App
            </Typography>
            <Button onClick={()=>{toggleColorMode()}}>toggle</Button>
        </Grid>
    )
}

export default Header