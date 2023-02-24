import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom"


const Title = () => {
    return (
        <a href="/">
            {/* <img alt="logo" className="logo" src="https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" /> */}
            <img alt="logo" className="logo" src={logo} />
        </a>
    )
}

const styleObj = {
    backgroundColor: '#FAF9F6'
}


const loggedInUser = () => {
    return true
}


const Header = () => {


    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="header" style={styleObj}>
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>

            {
                isLoggedIn ?
                    <button onClick={() => setIsLoggedIn(false)}>Logout</button> :
                    <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }

        </div>
    )
}

export default Header
