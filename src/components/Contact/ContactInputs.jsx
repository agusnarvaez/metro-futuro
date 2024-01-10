import SmallInput from "./SmallInput"
import LargeInput from "./LargeInput"
import Captcha from "./Captcha"

export default function ContactInputs({fields,contact,setContact}) {

    return (
        <>
        {
            fields.map((field,key) => {
                switch(field.class){
                    case "recaptcha": return <Captcha field={field} key={key} />
                    case "largeInput": return <LargeInput field={field} key={key} contact={contact}setContact={setContact}/>
                    case "contactSmallInput": return <SmallInput key={key} field={field} contact={contact} setContact={setContact} />
                    default: return null
            }})
        }
        </>
    )
}