//* Images
import investmentsTitleBg from "../../assets/img/background/investmentsTitleBg.png";

export default function InvestmentsTitle() {
    return (
        <section className="investmentstPageTitle">
            <img alt="sectionBackground" className="sectionBackground" src={investmentsTitleBg} />
            <h1>
                Conoce las <font color="#004DFF">oportunidades inmobiliarias</font>
            </h1>
        </section>
    )
}