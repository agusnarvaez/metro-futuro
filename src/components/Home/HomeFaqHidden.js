// Importo React
import React, { useState,useEffect } from "react";

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

    const [faq,setFaq]=useState({
        id:0,
        question: "",
        answer: "",
        cross: true
    })

    const [faqList,setFaqList] =useState( [
        {
            id: 0,
            question: "¿Que es la CNMV?",
            answer: "La Comisión Nacional del Mercado de Valores (CNMV) es el organismo encargado de la supervisión e inspección de los mercados de valores españoles y de la actividad de cuantos intervienen en los mismos. Es decir, regula los instrumentos de inversion y a sus oferentes en España.",
            cross: true,
        },
        {
            id: 1,
            question: "¿Qué es un prestamo participativo?",
            answer: "El préstamo participativo es un instrumento financiero destinado a empresas, que se caracteriza porque quien aporta capital (comprador de token) participa de los beneficios del negocio otorgados por la empresa financiada, además del cobro de intereses. Metro Futuro a través de la tokenización por oferta pública inscrita en la CNMV, tokeniza un préstamo participativo asociado a la renta que genera un inmueble. El inversor percibirá un interés que se determinará en función de la evolución de la explotación del inmueble.",
            cross: true,
        },
        {
            id: 2,
            question: "¿Qué es un token?",
            answer: "Un token es la representación digital de un activo real en el mundo. Mediante la tokenización podemos representar un activo de la economía real, como una casa, un auto o un grano de trigo en un activo digital. Creando su copia unica digital (DSC) para poder transaccionarlo mediante contratos inteligentes que permiten que el inversor controle en su billetera digital sus activos (tokens). Para saber más sobre esta tecnología podes leer el siguiente articulo.",
            cross: true,
        },
        {
            id: 3,
            question: "¿Puedo salir del negocio y recuperar mi inversión?",
            answer: "Con nuestra clausula de retiro anticipado podes hacerlo en el momento que desees, Metro Futuro se hará cargo de la compra de tu token.",
            cross: true,
        },
        {
            id: 4,
            question: "¿Qué requisitos tengo que cumplir para ser inversor?",
            answer: "Para ser inversor en Metro Futuro debes ser mayor a 18 años y registrarse en la plataforma y validar tu identidad.",
            cross: true,
        },
        {
            id: 5,
            question: "¿Cuales son los pasos para invertir?",
            answer: `De manera simple y global podes participar de los beneficios de un inmueble en Europa.\n1 - Registrarse en nuestra plataforma y validartu identidad.\n2 - Elegí el inmueble en la cual queres invertir\n3 - Completar el monto de la inversión\n4 - Firmar electrónicamente tu compra.`,
            cross: true,
        },
        {
            id: 6,
            question: "¿Qué recibo una vez trasnferida mi inversión?",
            answer: "Una vez realizado el pago, recibis en tu billetera digital la cantidad de tokens comprados, y partir de ese momento el derecho economico de recibir la renta y plusvalia generada por el inmueble.",
            cross: true,
        },
        {
            id: 7,
            question: "¿Qué gastos tengo al momento invertir?",
            answer: "Metro Futuro no tiene costo adicional ni al registrarse, ni al comprar o recibir tus ganancias. Nuestros honorarios por la compra, refacción, administración del alquiler y venta, se encuentra incluidos en el precio final. El uso de la tecnología tampoco considera un costo adicional para el usuario.",
            cross: true,
        },
        {
            id: 8,
            question: "¿Qué valor aporta Metro Futuro?",
            answer: "Somos un grupo de profesionales del sector con distintas ramas cómo finanzas, legales, desarrollo inmobiliario, marketing y tecnología aplicada. Metro Futuro utiliza la tecnología de smart contracts para poder acercar inversiones inmobiliarias en Europa a cualquier parte del mundo. De bajo ticket de acceso y una simple manera de invertir. Nuestro tabajo inicia desde la busqueda de un inmueble rentable y de bajo riesgo en el mercado, su refacción para agregarle valor, administración de alquiler y posterior venta. ",
            cross: true,
        },
        {
            id: 9,
            question: "¿Qué gastos tengo al momento invertir?",
            answer: "Invertir en Metro Futuro puede llevarte unos pocos minutos y lo podes realizar desde cualquier dispositivo que utilices. Registrate y realiza el proceso de validación de identidad y de KYC/AML. Selecciona el inmueble en el cual deseas invertir. Realizá el pago. Firma el Acuerdo de Inversión. Recibe tus tokens y los dividendos mensuales en tu billetera digital.",
            cross: true,
        }
    ])

    const handleFaqListChange = (id)=>{
        setFaqList(
            faqList.map(faq => {
                if(faq.id === id){
                    faq.cross = !faq.cross;
                }
                return faq;
            }
        ))
    }
    
return (

    <div className="homeFaqHidden">
        <ul className={homeFaqHidden?"homeFaqHiddenExpanded homeFaqHiddenCollapsed":"homeFaqHiddenExpanded"}>
            {faqList.map((faq,i) =>{
                return (
                    <li className={(faq.cross&&faq.id)?"homeFaqList":"homeFaqList homeFaqCollapsed"}>
                        <div className="homeFaqContainer">
                            <div className="homeFaqQuestion">
                                <h4>{faq.question}</h4>
                                <img
                                    src={homeFaqIcon}
                                    alt="homeFaqIcon" 
                                    className={faq.cross?"homeFaqCross":"homeFaqCross rotated45"}
                                    onClick={() => handleFaqListChange(faq.id)}
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
            })} 
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