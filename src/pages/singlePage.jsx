import WeatherFutureCard from "../component/Mainbar/FiveDays/FutureCard";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {handleGetFiveDayWeather} from "../api/api";
import {Grid} from "@mui/material";

const daysIndex = [0, 8, 16, 24, 32]

const SinglePage = () => {
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})
    const {city} = useParams()

    const handleGetData = async () => {
        const data = await handleGetFiveDayWeather(city)
        setCityWeatherFuture(data)
    }

    useEffect(() => {
        handleGetData()
    }, [])

    return (
        <Grid>
            <Grid>
                {city}
            </Grid>
            <Grid>
                {daysIndex.map(index => <WeatherFutureCard key={index} index={index}
                                                           cityWeatherFuture={cityWeatherFuture}/>)}
            </Grid>
        </Grid>
    )
}

export default SinglePage