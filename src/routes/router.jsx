import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
    {
        path: "/", element: <App/>, children:[
            {index:true,element: <Home/>},
            {path:'about',element: <About/>},
            {path:'blog',element: <Blog/>},
            {path:'contact',element: <Contact/>},
            {path:'Product',element: <Product/>},
             {path:'checkout',element: <Checkout/>},
            
        ],
    },
]);
export default router;