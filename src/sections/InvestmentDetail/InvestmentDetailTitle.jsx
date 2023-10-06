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
            <DegradedLink  text="¡Quiero invertir!" route='https://app.metro-futuro.com/login' backgroundColor="" id={degLinkId} />
            {/*  <div className="investmentDetailPageTitleShare">

            </div> */}
        </section>
    )
}