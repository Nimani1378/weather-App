import { Grid, Divider } from "@mui/material";
import SelectCity1 from "./SelectCity/SelectCity1";
import Details from "./Details/Details";
import { Stack } from "@mui/system";

const SideBar = ({ currency, setCurrency, cityWeather }) => {


    return (
        <Grid item md={5} xs={12} direction="column" sx={{
            minHeight: '100vh',
            backgroundColor: '#0000001c',
            backdropFilter: 'blur(20px)',
            paddingX: '3%'
        }}>
            <Stack gap={4} justifyContent="center" sx={{
                height: {
                    xs : 'auto' ,
                    md : '100vh'
                },
                width: "100%",
                padding : '20px'
            }}>
                <SelectCity1 currency={currency} setCurrency={setCurrency} />
                <Divider sx={{
                    borderColor: 'text.secondary'
                }} />
                <Details city={currency} cityWeather={cityWeather} />
            </Stack>
        </Grid>
    )
}

export default SideBar