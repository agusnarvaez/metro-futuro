//* Importo React
import { useState,useRef } from "react";


//* API de Emails
import emailjs from 'emailjs-com';

import { fieldsList,frmContact } from "../../utils/contactFields";

import credentials from "../../credentials";

//* Componentes
import ContactInputs from "../../components/Contact/ContactInputs";
import Button from "../../components/Contact/Button";

export default function ContactForm() {

    //* Hook de mail a enviar
    const [contact, setContact] = useState(frmContact);
    const [buttonClass,setButtonClass] = useState("contactSubmit degradedLink");

    const fields = useRef(fieldsList)


    //* Función que detecta el evento de presionar el botón ENVIAR
    const handleSubmit = (e) => {
        //* Prevengo que refresque la página
        e.preventDefault()

        if(fields.current.some(field=>field.isValid===false)){

            if(fields.current[fields.current.length-1].isValid===false){
                fields.current[fields.current.length-1].showErrors=true;
            }else{
                fields.current[fields.current.length-1].showErrors=false;
            }

            /* console.log("ERROR: Revisar los campos") */
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
                        /* console.log('SUCCESS!', response.status, response.text); */
                        /* alert("Mensaje enviado con éxito!"); */
                        setContact(frmContact);
                        setButtonClass("contactSubmit degradedLink contactSubmit--success")
                    },

                    //* Capturo el error al enviar el mensaje
                    (err) => {
                       /*  console.log('ERROR:\n', err); */
                        setButtonClass("contactSubmit contactSubmit--error")
                    });
        }
    }

    return (
        <section id="formContainer">

            <form onSubmit={handleSubmit}>

                <ContactInputs fields={fields.current} contact={contact} setContact={setContact} />

                <Button buttonClass={buttonClass} setButtonClass={setButtonClass} />

            </form >

        </section>
    )
}