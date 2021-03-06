import React from 'react';


function PartnerCard(props) {
    const partner= props.partner;
    return (
        <li>
            <a
                target="_blank"
                href={partner.link}
                rel="noopener noreferrer">
                <img alt={partner.alt} src={partner.img} />
            </a>
        </li>
    )
}
export default PartnerCard;