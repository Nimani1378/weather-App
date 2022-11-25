import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { handleGetOneDayWeather } from "../api/api";
import MainBar from "../component/Mainbar/MainBar";
import SideBar from "../component/SideBar/SideBar";

const Home = ({city,setCity,cityWeather,weather5}) => {

    return (
        <Grid container>
            <MainBar cityWeather={cityWeather} weather5={weather5} />
            <SideBar currency={city} setCurrency={setCity} cityWeather={cityWeather}/>
        </Grid>
    )
}

export default Home