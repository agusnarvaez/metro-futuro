
export default function InvestmentDetailTitle({investment}) {
    const address = investment.street + ", " + investment.city + ", " + investment.country;

    return (
        <section className="investmentDetailTitle">
            <div className="investmentDetailTitleInfo">
                <h1>{investment.title}</h1>
                <h2>{address}</h2>
            </div>
            {/*  <div className="investmentDetailPageTitleShare">

            </div> */}
        </section>
    )
}