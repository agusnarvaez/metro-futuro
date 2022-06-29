/* import React, { useEffect, useState } from "react"; */
import { NavLink } from 'react-router-dom'

function InvestmentCard(props) {
    console.log(props)
    return (
        <article className="investmentsPageProjectCard">
            <NavLink to={`/investments/${props.id}`} exact="true">
                <div className="investmentsPageProjectsCover">
                    <img alt="investmentsPageProjectsCover" src={props.cover}/>
                </div>
                <div className="investmentsPageProjectInfo">
                    <div className="investmentsPageProjectInfoTitle">
                        <h2>{props.title}</h2>
                        <p className="investmentsPageProjectInfoAddress">{props.address}</p>
                    </div>
                    <ul className="investmentsPageProjectInfoDetails">
                        <li>
                            <p>Ganancia estimada</p><font color="#004DFF">{props.estimatedEarnings}</font>
                        </li>
                        <li>
                            <p>Vecimiento del contrato</p><font color="#004DFF">{props.contractExpiration}</font>
                        </li>
                        <li>
                            <p>Superficie M<sup>2</sup></p><font color="#004DFF">{props.area}</font>
                        </li>
                        <li>
                            <p>Valor M<sup>2</sup></p><font color="#004DFF">{props.areaValue}</font>
                        </li>
                    </ul>
                </div>
            </NavLink> 
        </article>
    )
}

export default InvestmentCard;