//* #######################
//* ### INVESTMENT CARD ###
//* #######################

//* COMPONENTS
import InvestmentCardCover from "./InvestmentCardCover";
import InvestmentCardInfo from "./InvestmentCardInfo"

export default function InvestmentCard({investment,index}) {
    return (
        <article className="investmentsPageProjectCard">
            
            <InvestmentCardCover cover={investment.photos[0].fields.file.url} />
                
            <InvestmentCardInfo investment={investment} index={index}/>

        </article>
    )
}