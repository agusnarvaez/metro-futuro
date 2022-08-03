import React from 'react';


function HomeInvestmentCard(props) {
    const card=props.card;
    return (
        <div className="carrouselContainer_card">
            <div className="carrouselContainer_cardId">
                <div className="carrouselContainer_cardNumber">{card.id}</div>
                <h4>{card.title}</h4>
            </div >
            <p>{card.text}</p>
        </div>
    )
}
export default HomeInvestmentCard;