


export default function InvestmentDetailValue({investment}) {

    const list = [
        {
            text: "Valor del token",
            value: investment.tokenValue,
            unit: " eur"
        },
        {
            text: "Tokens emitidos",
            value: investment.tokensQuantity,
            unit: " m2f"
        },
        {
            text: "Rentabilidad anual por token",
            value: investment.saleProfit,
            unit: " %"
        }
    ]

    return (
        <section className="investmentDetailValue">
            {list.map((item,key)=>(
            item.value!==0?<div className="investmentDetailValueCard" key={key} index={key}>
                <div className="investmentDetailValueCardBorder"  >
                    <div className="investmentDetailValueCardTextContainer">
                        <p className="investmentDetailValueCardTextContainerTitle">{item.text}</p>
                        <p className="investmentDetailValueCardTextContainerValue">{item.value+item.unit}</p>
                    </div>
                </div>
            </div>:null))}
        </section>
    )
}