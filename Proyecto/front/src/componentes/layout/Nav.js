import React from "react";
import {Link} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Peliculas">Peliculas</Link></li>
                    <li><Link to="/Games">Games</Link></li>
                    <li><Link to="/Software">Software</Link></li>
                    <li><Link to="/Contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export default Nav;