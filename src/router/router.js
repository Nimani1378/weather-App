import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/home";
import SinglePage from "../pages/singlePage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: 'weather/:city',
        element: <SinglePage/>
    }
])