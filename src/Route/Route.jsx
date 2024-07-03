import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import About_Me from "../components/About_Me/About_Me";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/About_Me',
                element:<About_Me></About_Me>
            }
        ]
    }
])

export default router;