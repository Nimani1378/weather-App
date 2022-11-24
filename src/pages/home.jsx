import { Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { handleGetOneDayWeather } from "../api/api";
import SelectCity from "../component/SelectCity";
import Header from "../component/Header";
import MainBar from "../component/Mainbar/MainBar";
import SideBar from "../component/SideBar/SideBar";

const Home = () => {
    const [city, setCity] = useState('tehran');
    const [cityWeather, setCityWeather] = useState({})

    const handleGetData = async () => {
        const data = await handleGetOneDayWeather(city)
        setCityWeather(data)
    }

    useEffect(() => {
        handleGetData()
    }, [city])

    return (
        <Grid container>
            <MainBar cityWeather={cityWeather} currency={city} />
            <SideBar currency={city} setCurrency={setCity} cityWeather={cityWeather}/>
            <Header />
            <SelectCity currency={city} setCurrency={setCity} />
        </Grid>
    )
}

export default Home