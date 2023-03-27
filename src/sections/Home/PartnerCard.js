export default  function PartnerCard({partner}) {
    
    return (
        <li>
            <a
                target="_blank"
                href={partner.link}
                rel="noopener noreferrer"
                title={partner.alt}
                >
                <img alt={partner.alt} title={partner.alt} src={partner.img} loading="lazy" />
            </a>
        </li>
    )
}