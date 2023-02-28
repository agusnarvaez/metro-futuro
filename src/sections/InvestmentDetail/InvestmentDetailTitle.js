import DegradedLink from "../../components/DegradedLink";

export default function InvestmentDetailTitle({investment}) {
    const address = investment.street + ", " + investment.city + ", " + investment.country;
    const degLinkId="degradedLink--inverted"
    return (
        <section className="investmentDetailTitle">
            <div className="investmentDetailTitleInfo">
                <h1>{investment.title}</h1>
                <h2>{address}</h2>
            </div>
            <DegradedLink  text="¡Quiero invertir!" route={investment.platformLink} backgroundColor="" id={degLinkId} /* onFocus={changeDegLink} onBlur={changeDegLink} *//>
            {/*  <div className="investmentDetailPageTitleShare">

            </div> */}
        </section>
    )
}