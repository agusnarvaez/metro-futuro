// Importo React
import React, { useState } from "react";

// Íconos
import homeFaqIcon from '../../assets/img/icons/homeFaqIcon.png';

function HomeFaqHidden() {

    // Controladores de cruces para mostrar info (+)
    const [faqCross1, setFaqCross1] = useState(true);
    const [faqCross2, setFaqCross2] = useState(true);
    const [faqCross3, setFaqCross3] = useState(true);
    const [faqCross4, setFaqCross4] = useState(true);
    const [faqCross5, setFaqCross5] = useState(true);
    const [faqCross6, setFaqCross6] = useState(true);
    const [faqCross7, setFaqCross7] = useState(true);
    const [faqCross8, setFaqCross8] = useState(true);
    const [faqCross9, setFaqCross9] = useState(true);
    const [faqCross10, setFaqCross10] = useState(true);
    const [homeFaqHidden,setHomeFaqHidden]= useState(true);

    const [faqListHidden,setFaqListHidden]=useState([]);

    const faqList = [
        {
            id: 1,
            question: "¿Que es la CNMV?",
            answer: "La Comisión Nacional del Mercado de Valores (CNMV) es el organismo encargado de la supervisión e inspección de los mercados de valores españoles y de la actividad de cuantos intervienen en los mismos. Es decir, regula los instrumentos de inversion y a sus oferentes en España.",
            cross: faqCross1,
            setCross: setFaqCross1
        },
        {
            id: 2,
            question: "¿Qué es un prestamo participativo?",
            answer: "El préstamo participativo es un instrumento financiero destinado a empresas, que se caracteriza porque quien aporta capital (comprador de token) participa de los beneficios del negocio otorgados por la empresa financiada, además del cobro de intereses. Metro Futuro a través de la tokenización por oferta pública inscrita en la CNMV, tokeniza un préstamo participativo asociado a la renta que genera un inmueble. El inversor percibirá un interés que se determinará en función de la evolución de la explotación del inmueble.",
            cross: faqCross2,
            setCross: setFaqCross2
        },
        {
            id: 3,
            question: "¿Qué es un token?",
            answer: "Un token es la representación digital de un activo real en el mundo. Mediante la tokenización podemos representar un activo de la economía real, como una casa, un auto o un grano de trigo en un activo digital. Creando su copia unica digital (DSC) para poder transaccionarlo mediante contratos inteligentes que permiten que el inversor controle en su billetera digital sus activos (tokens). Para saber más sobre esta tecnología podes leer el siguiente articulo.",
            cross: faqCross3,
            setCross: setFaqCross3
        },
        {
            id: 4,
            question: "¿Puedo salir del negocio y recuperar mi inversión?",
            answer: "Con nuestra clausula de retiro anticipado podes hacerlo en el momento que desees, Metro Futuro se hará cargo de la compra de tu token.",
            cross: faqCross4,
            setCross: setFaqCross4
        },
        {
            id: 5,
            question: "¿Qué requisitos tengo que cumplir para ser inversor?",
            answer: "Para ser inversor en Metro Futuro debes ser mayor a 18 años y registrarse en la plataforma y validar tu identidad.",
            cross: faqCross5,
            setCross: setFaqCross5
        }
    ]
 /*    setFaqListHidden(faqList.map((faq) =>{
        return (
            <li className={faq.cross?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                <div className="homeFaqContainer">
                    <div className="homeFaqQuestion">
                        <h4>{faq.question}</h4>
                        <img
                            src={homeFaqIcon}
                            alt="homeFaqIcon" 
                            className={faq.cross?"homeFaqCross":"homeFaqCross rotated45"}
                            onClick={() => faq.setCross(!faq.cross)}
                        />
                    </div>
                    <div className={faq.cross?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                        <p>
                        {faq.answer}
                        </p>
                    </div>
                </div>
            </li>
        )
    })); */

return (

    <div className="homeFaqHidden">
            <ul className={homeFaqHidden?"homeFaqHiddenExpanded homeFaqHiddenCollapsed":"homeFaqHiddenExpanded"}>
                <li className={faqCross1?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué es la CNMV?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross1?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross1(!faqCross1)}
                            />
                        </div>
                        <div className={faqCross1?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            La Comisión Nacional del Mercado de Valores (CNMV) es el organismo encargado de la supervisión e 
inspección de los mercados de valores españoles y de la actividad de cuantos intervienen en los mismos.
Es decir, regula los instrumentos de inversion y a sus oferentes en España.
                            </p>
                        </div>
                    </div>
                    
                </li>

                <li className={faqCross2?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué es un prestamo participativo?</h4>
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
                            El préstamo participativo es un instrumento financiero destinado a empresas, que se caracteriza porque 
quien aporta capital (comprador de token) participa de los beneficios del negocio otorgados por la 
empresa financiada, además del cobro de intereses. 
Metro Futuro a través de la tokenización por oferta pública inscrita en la CNMV, tokeniza un préstamo 
participativo asociado a la renta que genera un inmueble. 
El inversor percibirá un interés que se determinará en función de la evolución de la explotación del inmueble.
                            </p>
                        </div>
                    </div>
                    
                </li>
                
                <li className={faqCross3?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué es un token?</h4>
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
                            Un token es la representación digital de un activo real en el mundo. 
Mediante la tokenización podemos representar un activo de la economía real, como una casa, un auto o un grano de trigo en un activo digital. Creando su copia unica digital (DSC) para poder transaccionarlo 
mediante contratos inteligentes que permiten que el inversor controle en su billetera digital sus activos (tokens). Para saber más sobre esta tecnología podes leer el siguiente articulo.  
                            </p>
                        </div>
                    </div>
                </li>
                

                <li className={faqCross4?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Puedo salir del negocio y recuperar mi inversión?</h4>
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
                            Con nuestra clausula de retiro anticipado podes hacerlo en el momento que desees, Metro Futuro se hará cargo de la compra de tu token. 
                            </p>
                        </div>
                    </div>
                </li>
                <li className={faqCross5?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué requisitos tengo que cumplir para ser inversor?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross5?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross5(!faqCross5)}
                            />
                        </div>
                        <div className={faqCross5?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            Para ser inversor en Metro Futuro debes ser mayor a 18 años y registrarse en la plataforma y validar tu identidad.
                            </p>
                        </div>
                    </div>
                    
                </li>

                <li className={faqCross6?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Cuales son los pasos para invertir?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross6?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross6(!faqCross6)
                                }
                            />
                        </div>
                        <div className={faqCross6?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            De manera simple y global podes participar de los beneficios de un inmueble en Europa. 
                            <br/>1 - Registrarse en nuestra plataforma y validartu identidad.
                            <br/>2 - Elegí el inmueble en la cual queres invertir
                            <br/>3 - Completar el monto de la inversión
                            <br/>4 - Firmar electrónicamente tu compra.
                            </p>
                        </div>
                    </div>
                    
                </li>
                
                <li className={faqCross7?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué recibo una vez trasnferida mi inversión?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross7?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross7(!faqCross7)
                                }
                            />
                        </div>
                        <div className={faqCross7?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            Una vez realizado el pago, recibis en tu billetera digital la cantidad de tokens comprados, y partir de ese momento el derecho economico de recibir la renta y plusvalia generada por el inmueble. 
                            </p>
                        </div>
                    </div>
                </li>
                

                <li className={faqCross8?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué gastos tengo al momento invertir?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross8?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross8(!faqCross8)
                                }
                            />
                        </div>
                        <div className={faqCross8?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            Metro Futuro no tiene costo adicional ni al registrarse, ni al comprar o recibir tus ganancias. Nuestros honorarios por la compra, refacción, administración del alquiler y venta, se encuentra incluidos en el precio final. El uso de la tecnología tampoco considera un costo adicional para el usuario.
                            </p>
                        </div>
                    </div>
                </li>

                <li className={faqCross9?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Qué valor aporta Metro Futuro?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross9?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross9(!faqCross9)
                                }
                            />
                        </div>
                        <div className={faqCross9?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            Somos un grupo de profesionales del sector con distintas ramas cómo finanzas, legales, desarrollo inmobiliario, marketing y tecnología aplicada. Metro Futuro utiliza la tecnología de smart contracts para poder acercar inversiones inmobiliarias en Europa a cualquier parte del mundo. De bajo ticket de acceso y una simple manera de invertir. 
Nuestro tabajo inicia desde la busqueda de un inmueble rentable y de bajo riesgo en el mercado, su refacción para agregarle valor, administración de alquiler y posterior venta. 
                            </p>
                        </div>
                    </div>
                </li>

                <li className={faqCross10?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                    
                    <div className="homeFaqContainer">
                        <div className="homeFaqQuestion">
                            <h4>¿Cómo es el proceso de inversión? ¿Cuánto tarda?</h4>
                            <img
                                src={homeFaqIcon}
                                alt="homeFaqIcon" 
                                className={faqCross10?"homeFaqCross":"homeFaqCross rotated45"}
                                onClick={() => setFaqCross10(!faqCross10)
                                }
                            />
                        </div>
                        <div className={faqCross10?"homeFaqResCollapsed":"homeFaqResExpanded"}>
                            <p>
                            Invertir en Metro Futuro puede llevarte unos pocos minutos y lo podes realizar desde cualquier dispositivo que utilices. 
Registrate y realiza el proceso de validación de identidad y de KYC/AML.
Selecciona el inmueble en el cual deseas invertir.
Realizá el pago.
Firma el Acuerdo de Inversión.
Recibe tus tokens y los dividendos mensuales en tu billetera digital.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        <div className="homeFaqLink"
            onClick={() => setHomeFaqHidden(!homeFaqHidden)}>
                <div className={homeFaqHidden?"homeFaqLinkShown":"homeFaqLinkHidden"}>
                    <p>
                        Ver más
                    </p>
                </div>
                <div className={homeFaqHidden?"homeFaqLinkHidden":"homeFaqLinkShown"}>
                    <p>
                        Ver menos
                    </p>
                </div>
        </div>
        
    </div>
    )
}
export default HomeFaqHidden;