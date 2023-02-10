

//* Background

//* Componentes
/* import DegradedLink from "../DegradedLink"; */
import DegradedNavLink from "../../components/DegradedNavLink";
//* Íconos

export default function HomeOportunity({principalInvestment}) {

    return (
        <section className="sectionInfo" id="homeOportunity">
            <img src={principalInvestment.cover} alt="investmentCover" className='sectionCover'/>
            <div className='sectionInfo'>

                <h2 className='section_subTitle'>Invertí en inmuebles tokenixados en <span className="degradedText">{principalInvestment.country}</span></h2>

                <p className="section_paragraph">Rentabilidad neta estimada anual {principalInvestment.estimatedEarnings}</p>

                <DegradedNavLink id="homeOportunityLink" text="Mas información" backgroundColor="white" route="/contact" />

            </div>
        </section>
    )
}