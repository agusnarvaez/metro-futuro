import React from 'react';
import { NavLink } from 'react-router-dom';

function AboutSlogan() {

    return (
        <section className="aboutSlogan">
            <div className="aboutSloganText">
                <h2>A través de <font color="#004DFF">Metro Futuro</font>, todos podemos obtener los beneficios de participar de la compra y operación de un inmueble en europa </h2>
            </div>
            <div className="aboutSlogansLink">
                <div>
                    <NavLink to='/investments/list'>
                        ¡Sumate a Metro Futuro, accede al Real State!
                    </NavLink>
                </div>
            </div>
        </section>
    )
}
export default AboutSlogan;