import WeatherFutureCard from "../component/weatherFutureCard";
import {useParams} from "react-router-dom";

const SinglePage = () => {
    const {city} = useParams()
    return(
        <WeatherFutureCard/>
    )
}

export default SinglePage