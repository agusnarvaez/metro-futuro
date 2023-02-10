


export default function InvestmentDetailValue({investment}) {

    const list = [
        {
            text: "Valor del token",
            value: investment.tokenValue + " eur"
        },
        {
            text: "Tokens emitidos",
            value: investment.tokensQuantity + " m2f"
        },
        {
            text: "Rentabilidad anual por token",
            value: investment.saleProfit + " %"
        }
    ]

    return (
        <section className="investmentDetailValue">
            {list.map((item,key)=>(
            <div className="investmentDetailValueCard" key={key} index={key}>
                <div className="investmentDetailValueCardBorder"  >
                    <div className="investmentDetailValueCardTextContainer">
                        <p className="investmentDetailValueCardTextContainerTitle">{item.text}</p>
                        <p className="investmentDetailValueCardTextContainerValue">{item.value}</p>
                    </div>
                </div>
            </div>))}
        </section>
    )
}