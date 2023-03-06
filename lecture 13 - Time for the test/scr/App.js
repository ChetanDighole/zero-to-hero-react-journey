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
import { useState } from "react"
import UserContext from "./utils/UserContext.js"
import { Provider } from "react-redux"
import store from "./utils/store.js"
import Cart from "./components/Cart.js"


const About = lazy(() => import('./components/About'))

const Instamart = lazy(() => import("./components/Instamart"))

const AppLayout = () => {

    const [user, setUser] = useState({
        name: "chetannnn",
        email: "chetan@gmail.com"
    })

    return (
        <Provider store={store}>
            <UserContext.Provider value={{user:user,setUser}}>

                <Header />

                <Outlet />

                <Footer />
            </UserContext.Provider>
        </Provider>
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
                element: <Body user={{
                    name: "chetan",
                    email: "chetan@gmail.com"
                }} />,
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
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },

])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
