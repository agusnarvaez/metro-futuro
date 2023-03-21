
export default function HomeBenefitCard({benefit}) {
    
    return (

            <li>
                <img alt="icon" src={benefit.img} />
                <div>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.text}</p>
                </div>
            </li>
            )
}