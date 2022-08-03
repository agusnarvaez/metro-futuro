import React from 'react';

function HomeBenefitCard(props) {
    const benefit = props.benefit;
    return (

            <li>
                <img alt="icon" src={benefit.img} />
                <div>
                    <h5>{benefit.title}</h5>
                    <p>{benefit.text}</p>
                </div>
            </li>
            )
}
export default HomeBenefitCard;