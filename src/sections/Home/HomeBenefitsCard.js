
export default function HomeBenefitCard({benefit}) {
    
    return (

            <li>
                <img alt="icon" title="icon" src={benefit.img} loading="lazy" />
                <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.text}</p>
                </div>
            </li>
            )
}