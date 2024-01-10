import React from 'react'
import { NavLink } from 'react-router-dom'
// Background
import livingRoom from '../../assets/img/livingRoom.jpg'

import homeAboutCoverMobile from '../../assets/img/background/homeAboutCoverMobile.svg'

export default function HomeAbout() {
    return (

        <section id="homeAbout">
                <div className="sectionInfo">
                    <h2
                        className='section_subTitle blackText'
                        id="homeAboutSubtitle">
                            Inversiones por M<sup>2</sup>
                    </h2>
                    <p
                        className='section_paragraph blackText'
                        id="homeAboutParagraph">
                            Somos una startup global que ofrece a los usuarios la <b>oportunidad de invertir</b> en una cartera diversificada de activos financieros digitales, en el <b>mercado inmobiliario de Europa.</b>
                    </p>
                    <p
                        className='section_paragraph blackText'
                        id="homeAboutParagraph">
                            Ofrecemos la posibilidad de adaptar la estrategia de inversión a las necesidades personales con la posibilidad de invertir <b>desde 100 euros</b>, con <b>dividendos mensuales y liquidez garantizada.</b>
                    </p>
                    <div className="degradedLink" id='homeAboutLink'>
                        <div className='degradedLink_TextContainer degradedLink_TextContainer--lightGray' id="homeAboutInfoLink">
                            <NavLink className="degradedLink_Text" title="Sobre nosotros" to='/sobre-nosotros'>
                                Conócenos
                            </NavLink>
                        </div>
                    </div>
                </div>


                {/* Background */}
                <img className="sectionBackground--desktop"  src={livingRoom} alt="livingRoom" title='livingRoom' loading="lazy" />
                <img className="sectionBackground--mobile" src={homeAboutCoverMobile} alt="sectionBackground" title='sectionBackground' loading="lazy"/>
            </section>
    )
}