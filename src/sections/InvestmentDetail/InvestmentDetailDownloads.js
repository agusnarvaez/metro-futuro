
import DegradedLink from "../../components/DegradedNavLink"

export default function InvestmentDetailDownloads({investment}) {

    const list = [
        {
            url:"",
            text: "Descargar White Paper"
        },
        {
            url: "",
            text: "Descargar contrato"
        },
        {
            url: "",
            text: "Descargar brochure"
        }
    ]
    return (
        <section className="investmentDetailDownloads">
                {list.map((item,index)=>(<DegradedLink key={index} text={item.text} route={item.url} backgroundColor="white" />))}
        </section>
    )
}