import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const Details = ({ city, cityWeather }) => {
    return (
        <Stack gap={4}>
            <Typography color={'text.primary'} variant="h6" sx={{
                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                fontWeight: '400',
                fontSize: '1rem',
                lineHeight: '1.4375em',
                letterSpacing: '0.00938em',
            }}>Weather Details</Typography>
            <Stack gap={2}>
                <Stack color={'text.secondary'} direction="row" justifyContent="space-between">
                    <Typography>Wind Speed</Typography>
                    <Typography>{cityWeather?.wind?.speed}</Typography>
                </Stack>
                <Stack color={'text.secondary'} direction="row" justifyContent="space-between">
                    <Typography>Max Temp</Typography>
                    <Typography>{cityWeather?.main?.temp_max}</Typography>
                </Stack>
                <Stack color={'text.secondary'} direction="row" justifyContent="space-between">
                    <Typography>Min temp</Typography>
                    <Typography>{cityWeather?.main?.temp_min}</Typography>
                </Stack>
                <Stack color={'text.secondary'} direction="row" justifyContent="space-between">
                    <Typography>Description</Typography>
                    <Typography>{cityWeather?.weather?.[0]?.description}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )

}

export default Details