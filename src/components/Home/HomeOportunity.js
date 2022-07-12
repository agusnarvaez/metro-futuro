import React from 'react';

//* Background

//* Componentes
import DegradedLink from "../DegradedLink";
//* Íconos

function HomeOportunity(props) {
    console.log(props.principalInvestment);
    const principalInvestment= props.principalInvestment;
    return (
        <section className="sectionInfo" id="homeOportunity">
            <img src={principalInvestment.cover} alt="investmentCover" className='sectionCover'/>
            <div className='sectionInfo'>
                <h2 className='section_subTitle'>Oportunidad de inversión inmobiliaria en <span className="degradedText">{principalInvestment.city +", "+ principalInvestment.country}</span></h2>
                <p className="section_paragraph">Rentabilidad neta estimada anual {principalInvestment.estimatedEarnings}</p>
                <DegradedLink id="homeOportunityLink" text="Mas información" backgroundColor="white" route="/contact" />
            </div>
        </section>
    )
}
export default HomeOportunity;