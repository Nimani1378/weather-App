import {Grid} from "@mui/material";



const WeatherFutureCard = ({cityWeatherFuture, index}) => {
    return (
        <Grid>
            <Grid>
                {cityWeatherFuture?.[index]?.main?.temp}
            </Grid>
        </Grid>
    )
}

export default WeatherFutureCard
