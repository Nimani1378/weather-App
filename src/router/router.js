import {createBrowserRouter} from "react-router-dom";
import Loading from "../IsLoaded/Loading";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Loading/>
    },
])