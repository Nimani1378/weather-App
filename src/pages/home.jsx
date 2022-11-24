import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { handleGetOneDayWeather } from "../api/api";
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
        </Grid>
    )
}

export default Home