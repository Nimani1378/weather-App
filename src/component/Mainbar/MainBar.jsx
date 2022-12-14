import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext } from "react";
import FiveDays from "./FiveDays/FiveDays";
import { ColorModeContext } from "../../App";


const MainBar = ({ cityWeather, weather5 }) => {
    const {toggleColorMode} = useContext(ColorModeContext);
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' , ' + time;
    console.log(cityWeather);
    
    return (
        <Grid sx={{
            minHeight : '100vh',
            paddingBottom: '20px'
        }} item md={7} xs={12}>
            <Stack sx={{
                height: {
                    xs : '15vh',
                    md : '48vh'}
                
            }} />
            {/* <Button onClick={()=>{toggleColorMode()}}>toggle</Button> */}
            <Stack direction="row" gap={2} sx={{
                justifyContent : 'center',
                alignItems: 'center',
                marginBottom : '2vh',
                flexWrap : 'wrap'
            }}>
                <Typography variant="h1" align="center" sx={{
                    color: 'text.primary',
                    fontSize : {
                        xs : '70px',
                        sm : '70px',
                        md : '70px',
                        lg : '100px'
                    },
                    width : {
                        xs : '100%',
                        md : 'auto'
                    }

                }}>
                    {`${cityWeather?.main?.temp}°`}
                </Typography>
                <Stack alignItems={'center'} sx={{
                    color: 'text.primary',
                    width : {
                        xs : '100%',
                        md : 'auto'
                    }
                }}>
                    <Typography variant="h3" sx={{
                        fontSize : {
                            xs : '40px',
                            sm : '40px',
                            md : '40px',
                            lg : '50px',
                        }
                    }}>
                        {cityWeather?.name}
                    </Typography>
                    <Typography variant="body">
                        {dateTime}
                    </Typography>
                </Stack>
                <Typography variant="h6" color='text.primary'>
                    {cityWeather?.weather?.[0]?.main}
                </Typography>

            </Stack>
            <FiveDays weather5={weather5}/>

        </Grid>
    )
}

export default MainBar