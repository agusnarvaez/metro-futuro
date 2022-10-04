import React from 'react';
import { NavLink } from 'react-router-dom';

import DegradedNavLink from "../../components/DegradedNavLink";

export default function HomeNews() {

    return (

        <section className="sectionInfo" id="homeNews">
                <div id="homeNews_Text">
                    <h2>Novedades</h2>
                    <p>Entérate de últimas noticias del sector inmobiliario en Europa y Latam.</p>
                </div>
                <div className="degradedLink" id="homeNews_degradedLink">
                    <div className='degradedLink_TextContainer degradedLink_TextContainer--lightBlue'>
                        <NavLink className="degradedLink_Text"to='/contact'>
                            Quiero saber más
                        </NavLink>
                    </div>
                </div>
                <DegradedNavLink route="/contact" text="Quiero saber más" backgroundColor="lightBlue" />
        </section>
    )
}