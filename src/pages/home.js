import {Grid, Typography, TextField} from "@mui/material";
import WeatherCard from "../component/weatherCard";
import {useEffect, useState} from "react";
import {api} from "../api/api";


export const Cities = [
    {name: 'تهران', title: 'tehran'},
    {name: 'تبریز', title: 'tabriz'},
    {name: 'اصفهان', title: 'isfahan'},
    {name: 'یزد', title: 'yazd'},
    {name: 'شیراز', title: 'shiraz'},
    {name: 'مشهد', title: 'mashhad'},
    {name: 'قم', title: 'qom'},
    {name: 'پاریس', title: 'paris'},
    {name: 'نیویورک', title: 'new%20york'},
    {name: 'دهلی قدیم', title: 'dehli'},
    {name: 'تورنتو', title: 'toronto'},
    {name: 'برلین', title: 'berlin'},
]

const Home = () => {
    const [currency, setCurrency] = useState('tehran');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

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
            <Grid item xs={12} textAlign={'center'}>
                <TextField
                    select
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    variant="filled"
                >
                    {Cities.map((option) => (
                        <option key={option.title} value={option.title}>
                            {option.name}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <WeatherCard cityWeather={cityWeather} city={currency}/>
        </Grid>
    )
}

export default Home