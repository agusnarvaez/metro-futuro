
import DegradedLink from "../../components/DegradedNavLink"

export default function InvestmentDetailDownloads({investment}) {

    const list = [
/*         {
            url:investment.whitePaper?investment.whitePaper.fields.file.url:"",
            text: "Descargar White Paper"
        },
        {
            url: investment.contract?investment.contract.fields.file.url:"",
            text: "Descargar contrato"
        }, */
        {
            url: investment.brochure?investment.brochure.fields.file.url:"",
            text: "Descargar brochure"
        }
    ]
    return (
        <section className="investmentDetailDownloads">
                {list.map((item,index)=>(<DegradedLink key={index} text={item.text} route={item.url} backgroundColor="white" />))}
        </section>
    )
}