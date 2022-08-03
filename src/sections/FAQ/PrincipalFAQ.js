// Importo React
import React from "react";

// Componentes
import FAQCard from "./FAQCard";
// Íconos
import completeFaqList from "../../data/faqList";

function PrincipalFAQ() {

    // Controladores de cruces para mostrar info (+)
    const faqList = completeFaqList.principal;

return (

        <ul className="faqList" id="principalFaqs">
            {faqList.map((faq,key) =>{
                return (
                    <FAQCard faq={faq} faqList={faqList} key={key}/>
                )
            })} 
        </ul>
    )
}
export default PrincipalFAQ;