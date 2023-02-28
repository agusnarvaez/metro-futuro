

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

                <h2 className='section_subTitle'>Invierte en inmuebles tokenizados en <span className="degradedText">{principalInvestment.country}</span></h2>

                <p className="section_paragraph">Con rendimientos de más del {principalInvestment.estimatedEarnings} anual</p>

                <DegradedNavLink 
                    id="homeOportunityLink"
                    text="Quiero invertir"
                    backgroundColor="white"
                    route="/investments/0" 
                />

            </div>
        </section>
    )
}