import WeatherFutureCard from "../component/weatherFutureCard";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {api} from "../api/api";
import {Grid} from "@mui/material";

const daysIndex = [0, 8, 16, 24, 32]

const SinglePage = () => {
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})
    const {city} = useParams()

    const handleGetData = async () => {
        const data = await api(`/data/2.5/forecast?q=${city}&lang=fa&appid=f165eb3ac71fb18e5bbcbe5de1478baa&units=metric`).then(data => data.data.list)
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
                {daysIndex.map( index => <WeatherFutureCard  key={index} index={index} cityWeatherFuture={cityWeatherFuture}/>)}
            </Grid>
        </Grid>
    )
}

export default SinglePage