import React, { useState , useContext } from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom"
// import { useContext } from "react";
import UserContext from "../utils/UserContext.js";


const Title = () => {
    return (
        <a href="/">
            <img alt="logo" className="h-28  p-2 " src={logo} />
        </a>
    )
}

// const { user } = useContext(UserContext);

const styleObj = {
    backgroundColor: '#FAF9F6'
}


const loggedInUser = () => {
    return true
}


const Header = () => {

    const { user } = useContext(UserContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-blue-500 md:bg-yellow-300 " >
            <Title />
            <div className="nav-items">
                <ul className="flex py-10 ">
                    <Link to='/'>
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="px-2">About</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="px-2">Contact</li>
                    </Link>
                    <li>Cart</li>
                    <Link to='/instamart'>
                        <li className="px-2">Instamart</li>
                    </Link>
                </ul>
            </div>
            <span className="p-10 font-bold text-red-900">{user.name}</span>

            {
                isLoggedIn ?
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button> :
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }

        </div>
    )
}

export default Header
