
import { NavLink } from 'react-router-dom'

export default function InvestmentCard({investment,index}) {
    
    return (
        <article className="investmentsPageProjectCard">
            <NavLink to={`/inmuebles/${investment.id}`} exact="true" title={investment.title}>
                <div className="investmentsPageProjectsCover">
                    <img className="investmentsPageProjectsCoverImg" alt="investmentsPageProjectsCoverImg" title='investmentsPageProjectsCoverImg' src={investment.cover} loading="lazy"/>
                    
                </div>
                <div className="investmentsPageProjectInfo">
                    <div className="investmentsPageProjectInfoTitle">
                        <h2>{investment.title}</h2>
                        <p className="investmentsPageProjectInfoAddress">{investment.address}</p>
                    </div>
                    <ul className="investmentsPageProjectInfoDetails">
                        <li>
                            <p>Ganancia estimada</p><font color="#004DFF">{investment.estimatedEarnings}</font>
                        </li>
                        <li>
                            <p>Vecimiento del contrato</p><font color="#004DFF">{investment.contractExpiration}</font>
                        </li>
                        <li>
                            <p>Superficie M<sup>2</sup></p><font color="#004DFF">{investment.area}</font>
                        </li>
                        <li>
                            <p>Valor M<sup>2</sup></p><font color="#004DFF">{investment.areaValue}</font>
                        </li>
                    </ul>
                </div>
            </NavLink> 
        </article>
    )
}