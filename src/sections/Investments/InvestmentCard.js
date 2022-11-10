
import { NavLink } from 'react-router-dom'

export default function InvestmentCard({investment,index}) {
    
    return (
        <article className="investmentsPageProjectCard">
            <NavLink to={`/investments/${investment.id}`} exact="true">
                <div className="investmentsPageProjectsCover">
                    <img className="investmentsPageProjectsCoverImg" alt="investmentsPageProjectsCoverImg" src={investment.cover}/>
                    
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