import DegradedNavLink from "../../components/DegradedNavLink";

export default function InvestmentDetailTitle({investment}) {
    const address = investment.street + ", " + investment.city + ", " + investment.country;
    const degLinkId="degradedLink--inverted"
    return (
        <section className="investmentDetailTitle">
            <div className="investmentDetailTitleInfo">
                <h1>{investment.title}</h1>
                <h2>{address}</h2>
            </div>
            {/* <DegradedNavLink  text="¡Quiero invertir!" route='/contacto' backgroundColor="" id={degLinkId} /> */}
            {/*  <div className="investmentDetailPageTitleShare">

            </div> */}
        </section>
    )
}