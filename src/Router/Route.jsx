import { createBrowserRouter } from "react-router-dom"
import MainLayOut from "../MainLayOut/MainLayOut"
import ErrorPage from "../ErrorPage/ErrorPage"
import News from "../Pages/News/News"
import Destination from "../Pages/Destination/Destination"
import Blog from "../Pages/Blog/Blog"
import Contact from "../Pages/Contact/Contact"
import Login from "../Pages/Login/Login"
import Registration from "../Pages/Registration/Registration"
import Home from "../Pages/Home/Home"
import DetailsPlace from "../Pages/DetailsPlaces/DetailsPlace"

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/news', element: <News /> },
            { path: '/destination', element: <Destination /> },
            { path: '/blog', element: <Blog /> },
            { path: '/contact', element: <Contact /> },

            { path: `/destination/:id`, loader: () => fetch('/touristPlaces.json'), element: <DetailsPlace /> },


            { path: '/login', element: <Login /> },
            { path: '/register', element: <Registration /> },
        ]
    }
])

export default Route