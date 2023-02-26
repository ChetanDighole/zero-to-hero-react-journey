import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
// import About from "./components/About.js"
import Error from "./components/Error.js"
import Profile from "./components/Profile.js"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

import Contact from "./components/Contact.js"
import RestaurantMenu from "./components/RestaurantMenu.js"
import Simmer from "./components/Simmer.js"
// import Instamart from "./components/Instamart.js"


const About = lazy(()=> import('./components/About'))

const Instamart = lazy(() => import("./components/Instamart"))

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
                element: 
                <Suspense fallback={<h1>Loading.....</h1>}>
                    <About />
                </Suspense>,
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
            },
            {
                path: "/instamart",
                element: 
                <Suspense fallback={<Simmer />} >
                    <Instamart />
                </Suspense>
            },
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
