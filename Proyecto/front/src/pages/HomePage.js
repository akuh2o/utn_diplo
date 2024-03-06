import React from "react";
import "../styles/fonts.css"

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="https://placehold.co/1080x200" alt="por definir"></img>
            </div>
            <div className="columnas">
            <selection className="bienvenido">
                <h2>Bienvenido</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam harum iste voluptatum a repellat
                    doloremque deserunt et earum ut repudiandae doloribus, aliquid nisi perspiciatis accusantium
                    temporibus omnis nulla fuga ipsum.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam harum iste voluptatum a repellat
                    doloremque deserunt et earum ut repudiandae doloribus, aliquid nisi perspiciatis accusantium
                    temporibus omnis nulla fuga ipsum
                </p>
            </selection>
            <selection className="testimonios">
                <h3>Actualizaciones</h3>
                <div className="testimonio">
                    <span>Resumen de actualizaciones</span>
                </div>
            </selection>
        </div>

        </main>
    );
}

export default HomePage;