// Importo React
import React,{ useState } from "react"

// Íconos
import homeFaqIcon from '../../assets/img/icons/homeFaqIcon.svg'

export default function FAQCard({item}) {

    const [faq,setFaq] = useState(item)
    const handleFaqChange = ()=>{
        setFaq({...faq,cross:(!faq.cross)})

    }

return (
    <li className="faqItem" onClick={handleFaqChange}>

        <div className="faqContainer">
            {/**Pregunta*/}
            <div className="faqQuestion">
                <h3>{faq.question}</h3>
                {/**Cruz de FAQ*/}
                <img
                    src={homeFaqIcon}
                    alt="faqIcon"
                    title="faqIcon"
                    className={faq.cross?"faqCross":"faqCross faqCross--rotated45"}
                    loading="lazy"
                />
            </div>
            {/* Respuesta FAQ */}
            <p className={faq.cross?"faqResponse":"faqResponse faqResponse--Expanded"}>
                {faq.answer}
            </p>
        </div>
    </li>
    )
}