// Importo React
import React,{ useState } from "react";

// Componentes
import FAQCard from "./FAQCard";
// Íconos


function HomeFaqPrincipal() {

    // Controladores de cruces para mostrar info (+)
    const [faqList,setFaqList] =useState( [
        {
            id: 0,
            question: "¿Quienes somos?",
            answer: "Somos un equipo de profesionales del Real Estate que tiene por objetivo dar acceso a toda persona a una inversion inmobiliaria en el mercado europeo de manera simple, segura y rentable.",
            cross: true,
        },
        {
            id: 1,
            question: "¿Como funciona tu inversión?",
            answer: "Al comprar un token en el inmueble en el que quieras participar, accedes a los beneficios economicos del negocio. Por ejemplo, si la propiedad es alquilada por 900 euros mensuales, todos los meses, se te acreditará el porcentaje que te corresponde en función de los tokens que compraste. Y cuando se vende el inmueble, recibis en tu billetera digital el monto que invertiste más los intereses obtenidos por la plusvalia de la venta.",
            cross: true,
        },
        {
            id: 2,
            question: "¿Qué documento legal estructura mi inversión?",
            answer: "Nuestras emisiones de tokens cumplen la normativa para la oferta de valores llevada a cabo en virtud del artículo 35.2 de la Real Decreto Legislativo 4/2015, de 23 de octubre, por el que se aprueba el texto refundido de la Ley del Mercado de Valores. Cada emisión es determinada segun un contrato llamado White Papper. Para mayor información te invitamos a leer el siguiente articulo sobre la regulación correspondiente.",
            cross: true,
        },
        {
            id: 3,
            question: "¿Cuál es el respaldo legal?",
            answer: "Los tokens cumplen con las normativas legales requeridas por la Comisión Nacional del Mercado de Valores (CNMV. ) El instrumento de inversion emitido es un Security Token Offering  (STO) aprobado por una Entidad de Asistencia Financiera  (EAF) Como agente regulado por la CNMV y representan títulos de deuda tokenizados o prestamos participativos.",
            cross: true,
        }
    ])

return (

        <ul className="faqList" id="principalFaqs">
            {faqList.map((faq,i) =>{
                return (
                    <FAQCard faq={faq} faqList={faqList}/>
                )
            })} 
        </ul>
    )
}
export default HomeFaqPrincipal;