import { useState } from "react";
import { NavLink } from 'react-router-dom';

// Íconos
import homeFaqIcon from '../../assets/img/icons/homeFaqIcon.png';

function HomeFaq() {

    // Controladores de cruces para mostrar info (+)
    const [faqCross1, setFaqCross1] = useState(true);
    const [faqCross2, setFaqCross2] = useState(true);
    const [faqCross3, setFaqCross3] = useState(true);
    const [faqCross4, setFaqCross4] = useState(true);
    
    return (

        <section className="homeFaq">
                <h3>Preguntas frecuentes</h3>
                <ul>
                    <li className={faqCross1?"homeFaqCollapsed":"homeFaqExpanded homeFaqCollapsed"}>
                        <div>
                            <h4>¿Quienes somos?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross1?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross1(!faqCross1)
                                }
                            />
                            <p className={faqCross1?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                                Somos un equipo de profesionales del Real Estate que tiene por objetivo dar acceso a toda persona a una inversion inmobiliaria en el mercado europeo de manera simple, segura y rentable.
                            </p>
                        </div>
                    </li>
                    <li className={faqCross2?"homeFaqCollapsed":"homeFaqExpanded homeFaqCollapsed"}>
                        <div>
                            <h4>¿Como funciona legalmente?</h4>
                            <img 
                                alt="homeFaqIcon"
                                src={homeFaqIcon}
                                className={faqCross2?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross2(!faqCross2)
                                }
                            />
                        </div>
                    </li>
                    <li className={faqCross3?"homeFaqCollapsed":"homeFaqExpanded"}>
                        <div>
                            <h4>¿Cuando y cómo puedo salir de mi inversión?</h4>
                            <img
                                alt="homeFaqIcon"
                                src={homeFaqIcon}
                                className={faqCross3?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross3(!faqCross3)
                                }
                            />
                        </div>
                    </li>
                    <li className={faqCross4?"homeFaqCollapsed":"homeFaqExpanded"}>
                        <div>
                            <h4>¿Como recibo mi alquiler mensualmente?</h4>
                            <img alt="homeFaqIcon" src={homeFaqIcon}
                                className={faqCross4?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross4(!faqCross4)
                                }
                            />
                        </div>
                    </li>
                </ul>
                <div className="homeFaqLink">
                    <div>
                        <NavLink to='/faq'>
                            Ver más
                        </NavLink>
                    </div>
                </div>
            </section>
    )
}
export default HomeFaq;