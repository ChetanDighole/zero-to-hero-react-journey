import React from "react"
import ReactDOM from "react-dom/client"
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
import About from "./components/About.js"
import Error from "./components/Error.js"
import Profile from "./components/Profile.js"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Contact from "./components/Contact.js"
import RestaurantMenu from "./components/RestaurantMenu.js"




const AppLayout = () => {
    return (
        <>
            <Header />
            {/* outLet */}
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,

                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            }
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
