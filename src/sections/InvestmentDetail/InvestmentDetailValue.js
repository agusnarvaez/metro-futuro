


export default function InvestmentDetailValue({investment}) {
    
    const list = [
        {
            text: "Valor del token",
            value: investment.tokenValue
        },
        {
            text: "Rentabilidad anual",
            value: (investment.rentProfit*12).toFixed(2)
        },
        {
            text: "Rentabilidad total",
            value: investment.saleProfit
        }
    ]
    
    return (
        <section className="investmentDetailValue">
            {list.map((item,key)=>(<div className="investmentDetailValueCard">
                <div className="investmentDetailValueCardBorder" index={key}>
                    <div className="investmentDetailValueCardTextContainer">
                        <p className="investmentDetailValueCardTextContainerTitle">{item.text}</p>
                        <p className="investmentDetailValueCardTextContainerValue">{item.value} eur</p>
                    </div>
                </div>
            </div>))}
        </section>
    )
}