import { Avatar, Grid, Typography,Button } from "@mui/material";
import { red } from '@mui/material/colors';
import { Stack } from "@mui/system";
import { useContext, useEffect } from "react";
import { useState } from "react";
import FiveDays from "./FiveDays/FiveDays";
import { ColorModeContext } from "../../App";


const MainBar = ({ cityWeather, currency }) => {
    const {toggleColorMode} = useContext(ColorModeContext);
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' , ' + time;
    console.log(cityWeather);
    
    const handleIcon = () => {
        if (cityWeather.weather) {
            return (
                <Avatar sx={{
                    color: "white"
                }} src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`} />
            )
        }
    }
    
    return (
        <Grid sx={{
            height: '100vh',
        }} item md={7} xs={12}>
            <Stack sx={{
                height: '48vh'
            }} />
            <Button onClick={()=>{toggleColorMode()}}>toggle</Button>
            <Stack direction="row" gap={2} sx={{
                paddingLeft: '25%',
                alignItems: 'center',
                marginBottom : '2vh'
            }}>
                <Typography variant="h1" sx={{
                    color: 'text.primary',
                }}>
                    {`${cityWeather?.main?.temp}°`}
                </Typography>
                <Stack sx={{
                    color: 'text.primary',
                }}>
                    <Typography variant="h3">
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
            <FiveDays city={currency} />

        </Grid>
    )
}

export default MainBar