import { Stack } from "@mui/material";
import WeatherFutureCard from "./FutureCard";

const daysIndex = [0, 8, 16, 24, 32]

const FiveDays = ({weather5}) => {
    return(
        <Stack gap={3} paddingX = {4} flexWrap='wrap' direction='row' justifyContent={'center'}>
            {daysIndex.map(index => <WeatherFutureCard key={index} cityWeatherFuture={weather5[index]}/>)}
        </Stack>
    )
}
export default FiveDays;