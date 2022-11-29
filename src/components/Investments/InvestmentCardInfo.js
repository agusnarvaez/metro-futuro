
import DegradedNavLink from "../DegradedNavLink"

export default function InvestmentCardInfo({investment,index}) {

    const address = investment.street + ", " + investment.city + ", " + investment.country;

    const list = [
        {
            title:"Rentabilidad con alquiler",
            value: investment.rentProfit + "%"
        },
        {
            title:"Rentabilidad con venta",
            value: investment.saleProfit + "%"
        },
        {
            title:"Tokens emitidos",
            value: investment.tokensQuantity + " m2f"
        },
        {
            title:"Valor del token",
            value: investment.tokenValue + " eur"
        },
        {
            title:"Superficie (m2)",
            value: investment.area + " m2"
        }
    ]
    return (
        <div className="investmentsPageProjectInfo">

            <div className="investmentsPageProjectInfoTitle">
                <h2>{investment.title}</h2>
                <h3 className="investmentsPageProjectInfoAddress">{address}</h3>
            </div>

            <ul className="investmentsPageProjectInfoDetails">
                {list.map((item,key)=>{
                    return(
                        <li key={key}>
                            <h3>{item.title}</h3>
                            <font color="#004DFF">{item.value}</font>
                        </li>
                    )
                })}
            </ul>

            <DegradedNavLink text="Ver más" backgroundColor="white" route={`/investments/${index}`}/>
        </div>
    )
}