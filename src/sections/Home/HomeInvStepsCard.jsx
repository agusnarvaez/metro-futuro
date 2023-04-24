
export default function HomeInvestmentCard({card}) {
    
    return (
        <div className="carrouselContainer_card">
            <div className="carrouselContainer_cardId">
                <div className="carrouselContainer_cardNumber">{card.id}</div>
                <h3>{card.title}</h3>
            </div >
            <p>{card.text}</p>
        </div>
    )
}