import React from 'react'
import{NavLink}from "react-router-dom";

export default function Header(props){
    return(
        <div className={`navbar ${props.mode}`}>
            <img src="logo192.png" alt="logo"/>
            <ul id="navul">
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/About">ABOUT</NavLink></li>
                <li><NavLink to="/">CONTACT</NavLink></li>
                <li><NavLink to="/">HOTELS</NavLink></li>
            </ul>
        </div>
        
    )
}