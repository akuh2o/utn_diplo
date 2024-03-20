import React from "react";
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to="/" className = {({ isActive }) => isActive ? "activo" : undefined }>Home</NavLink></li>
                    <li><NavLink to="/Peliculas" className = {({ isActive }) => isActive ? "activo" : undefined }>Peliculas</NavLink></li>
                    <li><NavLink to="/Games" className = {({ isActive }) => isActive ? "activo" : undefined }>Games</NavLink></li>
                    <li><NavLink to="/Software" className = {({ isActive }) => isActive ? "activo" : undefined }>Software</NavLink></li>
                    <li><NavLink to="/Contacto" className = {({ isActive }) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );

}

export default Nav;