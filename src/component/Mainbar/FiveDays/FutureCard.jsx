import {Box, Grid, Typography} from "@mui/material";



const FutureCard = ({cityWeatherFuture}) => {
    console.log(cityWeatherFuture);
    return (
        <Box sx={{
            display : 'flex',
            justifyContent : 'space-around',
            alignItems : 'center',
            flexDirection : 'column',
            width : '120px',
            height : '120px',
            backgroundColor : '#6a6a6a38',
            backdropFilter : 'blur(20px)',
            borderRadius : '10px'
        }}>
            <Typography color='text.primary' variant="h6">{`${cityWeatherFuture?.main?.temp}°`}</Typography>
        </Box>
    )
}

export default FutureCard
