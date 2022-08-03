// Importo React
import React, { useState } from "react";

// Componentes
import FAQCard from "./FAQCard";

// Íconos

import completeFaqList from "../../data/faqList";

function HiddenFAQ() {

    // Controladores de cruces para mostrar info (+)
    const [homeFaqHidden,setHomeFaqHidden]= useState(true);
    const faqList = completeFaqList.hidden;
    
    
return (

    <div className="hiddenFaqs">
        <ul className={homeFaqHidden?"faqList faqList--collapsed":"faqList"}>
            {faqList.map((faq,key) =>{
                return (
                    <FAQCard faq={faq} faqList={faqList} key={key}/>
                )
            })} 
        </ul>

        <div className="degradedLink" id="faqLink"
            onClick={() => setHomeFaqHidden(!homeFaqHidden)}>
                <div className={homeFaqHidden?"degradedLink_TextContainer degradedLink_TextContainer--white":"degradedLink_TextContainer--hidden"}>
                    <p className="degradedLink_Text">
                        Ver más
                    </p>
                </div>
                <div className={homeFaqHidden?"degradedLink_TextContainer--hidden":"degradedLink_TextContainer degradedLink_TextContainer--white"}>
                    <p className="degradedLink_Text">
                        Ver menos
                    </p>
                </div>
        </div>
        
    </div>
    )
}
export default HiddenFAQ;