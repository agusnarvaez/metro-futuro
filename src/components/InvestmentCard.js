/* import React, { useEffect, useState } from "react"; */

function InvestmentCard(props) {
    return (
        <article className="investmentsPageProjectCard">
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
                    </article>
    )
}

export default InvestmentCard;