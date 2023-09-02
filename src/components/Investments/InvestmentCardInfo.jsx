
import DegradedNavLink from "../DegradedNavLink"

export default function InvestmentCardInfo({investment,index}) {

    const address = investment.street + ", " + investment.city + ", " + investment.country;

    const list = [
        {
            title:"Rentabilidad con alquiler",
            value: investment.rentProfit,
            unit:' %'
        },
        {
            title:"Rentabilidad con venta",
            value: investment.saleProfit,
            unit:' %'
        },
        {
            title:"Tokens emitidos",
            value: investment.tokensQuantity,
            unit:' m2f'
        },
        {
            title:"Valor del token",
            value: investment.tokenValue,
            unit:' eur'
        },
        {
            title:"Superficie (m2)",
            value: investment.area,
            unit:' m2'
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
                    if(item.value!==0){
                        return(
                            <li key={key}>
                                <h3>{item.title}</h3>
                                <font color="#004DFF">{item.value+ item.unit}</font>
                            </li>
                        )
                    }
                    return('')

                })}
            </ul>

           {investment.available?<DegradedNavLink text="Ver más" backgroundColor="white" route={`/inmuebles/${investment.url}`}/>:""}
        </div>
    )
}