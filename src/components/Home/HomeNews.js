import React from 'react';
import { NavLink } from 'react-router-dom';

function HomeNews() {

    return (

        <section className="homeNews">
                <div className="homeNewsText">
                    <h3>Novedades</h3>
                    <p>Entérate de últimas noticias del sector inmobiliario en Europa y Latam.</p>
                </div>
                <div className="homeNewsLink">
                    <div>
                        <NavLink to='/conact'>
                            Quiero saber más
                        </NavLink>
                    </div>
                </div>
        </section>
    )
}
export default HomeNews;