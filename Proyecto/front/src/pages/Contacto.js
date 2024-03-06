import React from "react";

const Contacto = (props) => {
    return (
        <main class="holder contacto">
        <div>
            <h2>Contacto</h2>
            <form action="" method="" class="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="number" name="" />
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="enviar"/>
                </p>
            </form>
        </div>
        <div class="datoscontacto">
            <h2>Datos de contacto</h2>
            <ul>
                <li>telefono</li>
                <li>Email</li>
                <li>facebook</li>
                <li>twitter</li>
                <li>skype</li>
            </ul>
        </div>
    </main>
    );
}

export default Contacto;