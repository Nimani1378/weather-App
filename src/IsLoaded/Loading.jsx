import { CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {handleGetOneDayWeather} from '../api/api';
import Home from "../pages/home";

const Loading = () => {
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})
    const [flag, SetFlag] = useState (false);
    
    useEffect(() => {
        const handleGetData = async () => {
            SetFlag(false)
            const data = await handleGetOneDayWeather(city);
            setCityWeather(data);
            SetFlag(true);
        }
        handleGetData().catch((e) => {
            alert(e.message);
        });
    }, [city])
    
    if (flag) {
        return (<Home city={city} setCity={setCity} cityWeather={cityWeather}/>)
    }
    else {
        return (
            <Stack spacing={4} sx={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                direction: 'row'
            }}>
                <Typography variant="h2" color='white'>WeatherApp</Typography>
                <CircularProgress color="error" size={100} />
            </Stack>
        )
    }
}


export default Loading;