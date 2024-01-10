
// Componentes
import FAQCard from "./FAQCard"
// Íconos
import completeFaqList from "../../data/faqList"

export default function PrincipalFAQ() {

    // Controladores de cruces para mostrar info (+)
    const faqList = completeFaqList.principal

return (

        <ul className="faqList" id="principalFaqs">
            {faqList.map((item,key) =>{
                return (
                    <FAQCard item={item} faqList={faqList} key={key}/>
                )
            })}
        </ul>
    )
}