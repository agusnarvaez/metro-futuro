// Importo React
import React,{ useState } from "react";

// Íconos
import homeFaqIcon from '../../assets/img/icons/homeFaqIcon.png';

function HomeFaqPrincipal(props) {
    const [faqList,setFaqList] = useState(props.faqList);
    const faq=props.faq;

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
    <li className="faqItem" onClick={() => handleFaqListChange(faq.id)}>
        <div className="faqContainer">
            {/**Pregunta*/}
            <div className="faqQuestion">
                <h4>{faq.question}</h4>
                {/**Cruz de FAQ*/}
                <img
                    src={homeFaqIcon}
                    alt="faqIcon" 
                    className={faq.cross?"faqCross":"faqCross faqCross--rotated45"}
                    
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
export default HomeFaqPrincipal;