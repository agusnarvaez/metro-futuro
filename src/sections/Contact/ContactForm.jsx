//* Importo React
import { useState,useRef } from "react"


//* API de Emails
import emailjs from 'emailjs-com'

import { fieldsList,frmContact } from "../../utils/contactFields"

import credentials from "../../credentials"

//* Componentes
import ContactInputs from "../../components/Contact/ContactInputs"
import FormButton from "../../components/Contact/FormButton"

export default function ContactForm() {

    //* Hook de mail a enviar
    const [contact, setContact] = useState(frmContact)
    const [buttonClass,setButtonClass] = useState("contactSubmit degradedLink")
    const [successMessage,setSuccessMessage] = useState(false)
    const fields = useRef(fieldsList)


    //* Función que detecta el evento de presionar el botón ENVIAR
    const handleSubmit = (e) => {
        //* Prevengo que refresque la página
        e.preventDefault()

        if(fields.current.some(field=>field.isValid===false)){

            if(fields.current[fields.current.length-1].isValid===false){
                fields.current[fields.current.length-1].showErrors=true
            }else{
                fields.current[fields.current.length-1].showErrors=false
            }
            alert("Por favor revise los campos!")

        }else{
            //* Si está todo ok, muestro el símbolo de carga
            setButtonClass("contactSubmit contactSubmit--loading")

            //* Si están ok, ejecuta el método de emailJs
            emailjs.send(
                credentials.emailJs.service, //* ID de servicio de mail de la API
                credentials.emailJs.template, //* ID de la plantilla de Mail
                contact,
                credentials.emailJs.id //* ID de
                )
                    .then((response) => {
                        console.info('SUCCESS!', response.status, response.text)
                        setContact(frmContact)
                        setButtonClass("contactSubmit degradedLink contactSubmit--success")
                        setSuccessMessage(true)
                    },

                    //* Capturo el error al enviar el mensaje
                    (err) => {
                        console.error('ERROR:\n', err)
                        setButtonClass("contactSubmit contactSubmit--error")
                    })
        }
    }

    return (
        <section id="formContainer">

            <form onSubmit={handleSubmit}>

                <ContactInputs fields={fields.current} contact={contact} setContact={setContact} />

                <FormButton buttonClass={buttonClass} setButtonClass={setButtonClass} />
                {successMessage?<p>Gracias por tu interés. En breve, un representante de Metro Futuro se estará comunicando contigo.</p>:""}
            </form >

        </section>
    )
}