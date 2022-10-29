import {Grid, Typography} from "@mui/material";
import WeatherCard from "../component/weatherCard";
import {useEffect, useState} from "react";
import {api} from "../api/api";
import SelectCity from "../component/SelectCity";

const Home = () => {
    const [currency, setCurrency] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})

    const handleGetData = async () => {
        const data = await api(`/data/2.5/weather?q=${currency}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`).then(data => data.data)
        setCityWeather(data)
    }

    useEffect(() => {
        handleGetData()
    }, [currency])
    return(
        <Grid container>
            <Grid item xs={12} textAlign={'center'}>
                <Typography variant={'h5'}>
                    Weather App
                </Typography>
            </Grid>
            <SelectCity currency={currency} setCurrency={setCurrency}/>
            <WeatherCard cityWeather={cityWeather} city={currency}/>
        </Grid>
    )
}

export default Home