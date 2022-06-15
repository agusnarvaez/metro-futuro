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
        {/**Título**/}
        <h3>Preguntas frecuentes</h3>

        <ul>
            <li className={faqCross1?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                
                <div className="homeFaqContainer">
                    <div className="homeFaqQuestion">
                        <h4>¿Quienes somos?</h4>
                        <img
                            src={homeFaqIcon}
                            alt="homeFaqIcon" 
                            className={faqCross1?"homeFaqCross":"homeFaqCross rotated45"}
                            onClick={() => setFaqCross1(!faqCross1)
                            }
                        />
                    </div>
                    <div className={faqCross1?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                        <p>
                            Somos un equipo de profesionales del Real Estate que tiene por objetivo dar acceso a toda persona a una inversion inmobiliaria en el mercado europeo de manera simple, segura y rentable.
                        </p>
                    </div>
                </div>
                
            </li>

            <li className={faqCross2?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                
                <div className="homeFaqContainer">
                    <div className="homeFaqQuestion">
                        <h4>¿Como funciona tu inversión?</h4>
                        <img
                            src={homeFaqIcon}
                            alt="homeFaqIcon" 
                            className={faqCross2?"homeFaqCross":"homeFaqCross rotated45"}
                            onClick={() => setFaqCross2(!faqCross2)
                            }
                        />
                    </div>
                    <div className={faqCross2?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                        <p>
                        Al comprar un token en el inmueble en el que quieras participar, accedes a los beneficios 
economicos del negocio. Por ejemplo, si la propiedad es alquilada por 900 euros mensuales, 
todos los meses, se te acreditará el porcentaje que te corresponde en función de los tokens que compraste. 
Y cuando se vende el inmueble, recibis en tu billetera digital el monto que invertiste más los intereses obtenidos
por la plusvalia de la venta.
                        </p>
                    </div>
                </div>
                
            </li>
            
            <li className={faqCross3?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                
                <div className="homeFaqContainer">
                    <div className="homeFaqQuestion">
                        <h4>¿Qué documento legal estructura mi inversión?</h4>
                        <img
                            src={homeFaqIcon}
                            alt="homeFaqIcon" 
                            className={faqCross3?"homeFaqCross":"homeFaqCross rotated45"}
                            onClick={() => setFaqCross3(!faqCross3)
                            }
                        />
                    </div>
                    <div className={faqCross3?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                        <p>
                        Nuestras emisiones de tokens cumplen la normativa para la oferta de valores llevada a cabo en virtud 
del artículo 35.2 de la Real Decreto Legislativo
4/2015, de 23 de octubre, por el que se aprueba el texto 
refundido de la Ley del Mercado de
Valores. Cada emisión es determinada segun un contrato llamado 
White Papper. Para mayor información te invitamos a leer el siguiente articulo
sobre la regulación correspondiente.
                        </p>
                    </div>
                </div>
            </li>
            

            <li className={faqCross4?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                
                <div className="homeFaqContainer">
                    <div className="homeFaqQuestion">
                        <h4>¿Cuál es el respaldo legal?</h4>
                        <img
                            src={homeFaqIcon}
                            alt="homeFaqIcon" 
                            className={faqCross4?"homeFaqCross":"homeFaqCross rotated45"}
                            onClick={() => setFaqCross4(!faqCross4)
                            }
                        />
                    </div>
                    <div className={faqCross4?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                        <p>
                        Los tokens cumplen con las normativas legales requeridas por la Comisión Nacional del Mercado de Valores (CNMV. )
El instrumento de inversion emitido es un Security Token Offering  (STO) aprobado por una 
Entidad de Asistencia Financiera  (EAF) Como agente regulado por la CNMV y representan títulos de deuda 
tokenizados o prestamos participativos.
                        </p>
                    </div>
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