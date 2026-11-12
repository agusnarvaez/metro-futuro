//* Importo React
import { useState,useRef } from "react"


import { fieldsList,frmContact } from "../../utils/contactFields"

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

            //* ponytail: sitio demo de portfolio, el formulario no envía datos
            setContact(frmContact)
            setButtonClass("contactSubmit degradedLink contactSubmit--success")
            setSuccessMessage(true)
        }
    }

    return (
        <section id="formContainer">

            <form onSubmit={handleSubmit}>

                <ContactInputs fields={fields.current} contact={contact} setContact={setContact} />

                <FormButton buttonClass={buttonClass} setButtonClass={setButtonClass} />
                {successMessage?<p>Sitio de demostración: el formulario no envía datos.</p>:""}
            </form >

        </section>
    )
}