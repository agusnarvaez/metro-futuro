
export default function HomeBenefitCard({benefit}) {
    
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