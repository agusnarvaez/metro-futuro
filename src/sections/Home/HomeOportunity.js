

//* Background

//* Componentes
/* import DegradedLink from "../DegradedLink"; */
import DegradedLink from "../../components/DegradedLink";
//* Íconos

export default function HomeOportunity({principalInvestment}) {

    return (
        <section className="sectionInfo" id="homeOportunity">
            <img src={principalInvestment.cover} alt="investmentCover" className='sectionCover'/>
            <div className='sectionInfo'>

                <h2 className='section_subTitle'>Invertí en inmuebles tokenizados en <span className="degradedText">{principalInvestment.country}</span></h2>

                <p className="section_paragraph">Con rendimientos de más del {principalInvestment.estimatedEarnings} anual</p>

                <DegradedLink 
                    id="homeOportunityLink"
                    text="Quiero invertir"
                    backgroundColor="white"
                    route="https://app.metro-futuro.com/home" 
                />

            </div>
        </section>
    )
}