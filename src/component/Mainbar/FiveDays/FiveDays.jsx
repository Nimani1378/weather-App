import { Stack } from "@mui/material";
import WeatherFutureCard from "./FutureCard";
import { handleGetFiveDayWeather } from "../../../api/api";
import { useEffect, useState } from "react";

const daysIndex = [0, 8, 16, 24, 32]

const FiveDays = ({city}) => {
    const [cityWeatherFuture, setCityWeatherFuture] = useState({})
    console.log('5 day : ', cityWeatherFuture);
    useEffect(() => {
        const handleGetData = async () => {
            const data = await handleGetFiveDayWeather(city)
            setCityWeatherFuture(data)
        }
        handleGetData().catch((e) => {
            alert(e.message);
          });
    }, [city])
    return(
        <Stack gap={3} paddingX = {4} flexWrap='wrap' direction='row' justifyContent={'center'}>
            {daysIndex.map(index => <WeatherFutureCard key={index} cityWeatherFuture={cityWeatherFuture[index]}/>)}
        </Stack>
    )
}
export default FiveDays;