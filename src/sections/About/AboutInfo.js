import React from 'react';

// Background
import aboutInfoBg from "../../assets/img/background/aboutInfoBg.png";

function AboutInfo() {

    return (
        <section id="aboutInfo">
            <h2 className='section_subTitle'>Agregamos valor generando mayor acceso a la <font color="#004DFF">industria inmobiliaria</font></h2>
            <p className='section_paragraph'>
                Un inmueble representa una necesidad primaria para cualquier persona, siendo además la inversión rentable, productiva y segura.<br />
                Utilizamos <b>tecnología blockchain</b> para registrar los tokens inmobiliarios a través de Smart Contracts (contratos inteligentes) permitiéndonos generar pequeñas participaciones del inmueble, lo que llamamos el fraccionamiento por m<sup>2</sup>, es decir, cualquier persona puede comprar un token que es una representación digital del negocio asociado al inmueble.<br />
                Desde nuestra plataforma con tu billetera digital podes manejar tus inversiones, vender o comprar los tokens y recibir los dividendos mensualmente.
            </p>
            <img alt="sectionBackground" className="sectionBackground" src={aboutInfoBg} />
        </section>
    )
}
export default AboutInfo;