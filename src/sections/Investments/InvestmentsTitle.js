//* Images
import investmentsTitleBg from "../../assets/img/background/investmentsTitleBg.svg";

export default function InvestmentsTitle() {
    return (
        <section className="investmentstPageTitle">
            <img alt="sectionBackground" className="sectionBackground" src={investmentsTitleBg} />
            <h1>
                Conoce nuestros <font color="#004DFF">inmuebles tokenizados</font>
            </h1>
        </section>
    )
}