//* Importo React
import { useState,useRef } from "react";


//* API de Emails
import emailjs from 'emailjs-com';


import credentials from "../../credentials";

//* Componentes
import ContactInputs from "../../components/Contact/ContactInputs";

export default function ContactForm() {

    //* Campos de EmailJS
    const frmContact = {
        from_name: '',
        from_email: '',
        phone: '',
        subject: '',
        message: '',
        attachment: ''
    };

    //* Hook de mail a enviar
    const [contact, setContact] = useState(frmContact);

    //* Variables de validaciones

    const fields = useRef([
        {
            name:"from_name",
            type:"inputContainer",
            class: "contactSmallInput",
            value:"",
            placeholder:"Nombre",
            isValid:false,
            showErrors:false,
            error:"Ingrese un nombre"
        },
        {
            name:"from_email",
            type:"inputContainer",
            class: "contactSmallInput",
            value:"",
            placeholder:"Email",
            isValid:false,
            showErrors:false,
            error:"Ingrese un email válido"
        },
        {
            name:"subject",
            type:"inputContainer",
            class: "contactSmallInput",
            value:"",
            placeholder:"Asunto",
            isValid:false,
            showErrors:false,
            error:"Ingrese un asunto"
        },
        {
            name:"message",
            type:"inputContainer",
            class: "largeInput",
            value:"",
            placeholder:"¿Porque deseas contactarte?",
            isValid:false,
            showErrors:false,
            error:"Ingrese un mensaje"
        },
        {
            name:"captcha",
            type:"captcha",
            class:"recaptcha",
            value:"",
            isValid:false,
            showErrors:false,
            error:"Por favor, verifique que no es un robot"
        }
    ])

    const [showMessage, setShowMessage] = useState(false);

    //* Función que detecta el evento de presionar el botón ENVIAR
    const handleSubmit = e => {
        //* Prevengo que refresque la página
        e.preventDefault()

        if(fields.current.some(field=>field.isValid===false)){
            console.log("ERROR: Revisar los campos");
            alert("Por favor revise los campos!")
        }else{
            //* Si están ok, ejecuta el método de emailJs
            emailjs.send(
                credentials.emailJs.service, //* ID de servicio de mail de la API
                credentials.emailJs.template, //* ID de la plantilla de Mail
                contact,
                credentials.emailJs.id //* ID de
                )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Mensaje enviado con éxito!");
                    setContact(frmContact);
                    setShowMessage(true);
                },

                //* Capturo el error al enviar el mensaje
                (err) => {
                    console.log('ERROR:\n', err);
                });
        }
    }

    return (
        <section id="formContainer">

            <form onSubmit={handleSubmit}>

                <ContactInputs fields={fields.current} contact={contact} setContact={setContact} />

                <button
                    className="contactSubmit"
                    type="submit"
                >
                    <div>
                        <p>
                            Enviar
                        </p>
                    </div>
                </button>

                {showMessage ? <div className="alertSuccess" role="alert">Enviado con éxito!</div> : ``}
            </form >

        </section>
    )
}