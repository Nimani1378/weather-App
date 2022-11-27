import { CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {handleGetOneDayWeather,handleGetFiveDayWeather} from '../api/api';
import Home from "../pages/home";

const Loading = () => {
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({});
    const [weather5, setWeather5] = useState({});
    const [flag, SetFlag] = useState (false);
    
    useEffect(() => {
        const handleGetData = async () => {
            SetFlag(false);
            const data = await handleGetOneDayWeather(city);
            const data5 = await handleGetFiveDayWeather(city);
            setCityWeather(data);
            setWeather5(data5);
            SetFlag(true);
        }
        handleGetData().catch((e) => {
            alert(e.message);
        });
    }, [city])
    
    if (flag) {
        return (<Home city={city} setCity={setCity} cityWeather={cityWeather} weather5={weather5}/>)
    }
    else {
        return (
            <Stack padding={4} spacing={4} sx={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                direction: 'row'
            }}>
                <Typography variant="h2" color='white'>WeatherApp</Typography>
                <Typography variant="body" color='white'>If the page does not load,Please use vpn
</Typography>
                <CircularProgress color="error" size={100} />
            </Stack>
        )
    }
}


export default Loading;