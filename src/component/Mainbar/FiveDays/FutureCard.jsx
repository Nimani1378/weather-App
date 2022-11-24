import {Box, Typography} from "@mui/material";



const FutureCard = ({cityWeatherFuture}) => {
    console.log(cityWeatherFuture);
    return (
        <Box sx={{
            display : 'flex',
            justifyContent : 'space-around',
            alignItems : 'center',
            flexDirection : 'column',
            width : {
                xs : '80px',
                sm : "90px",
                md : '100px',
                lg : '120px'
            },
            height : {
                xs : '80px',
                sm : "90px",
                md : '100px',
                lg : '120px'
            },
            backgroundColor : '#6a6a6a38',
            backdropFilter : 'blur(20px)',
            borderRadius : '10px'
        }}>
            <Typography color='text.primary' variant="h6">{`${cityWeatherFuture?.main?.temp}°`}</Typography>
        </Box>
    )
}

export default FutureCard
