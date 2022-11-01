


export default function InvestmentDetailValue({investment}) {
    
    const list = [
        {
            text: "Rentabilidad por venta",
            value: investment.saleProfit
        },
        {
            text: "Valor del token",
            value: investment.tokenValue
        },
        {
            text: "Valor del m2",
            value: (investment.tokenValue*investment.tokensQuantity)/investment.area
        }
    ]
    
    return (
        <section className="investmentDetailValue">
            {list.map((item,index)=>(<div className="investmentDetailValueCard">
                <div className="investmentDetailValueCardBorder">
                    <div className="investmentDetailValueCardTextContainer">
                        <p className="investmentDetailValueCardTextContainerTitle">{item.text}</p>
                        <p className="investmentDetailValueCardTextContainerValue">${item.value}</p>
                    </div>
                </div>
            </div>))}
        </section>
    )
}