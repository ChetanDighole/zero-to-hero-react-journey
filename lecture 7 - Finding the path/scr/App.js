import React from "react"
import  ReactDOM  from "react-dom/client"
import Header from './components/Header.js'
import Body from './components/Body'
import Footer from './components/Footer'
import About from "./components/About.js"
import Error from "./components/Error.js"

import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom"
import Contact from "./components/Contact.js"




const AppLayout = () => {
    return(
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
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ]
    },
    
])


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
