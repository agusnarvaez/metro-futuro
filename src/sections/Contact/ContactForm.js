//* Importo React
import { useState,useRef } from "react";


//* API de Emails
import emailjs from 'emailjs-com';

//* Captcha
import ReCAPTCHA from "react-google-recaptcha";
import credentials from "../../credentials";

//* Componentes
import ContactErrors from "../../components/Contact/ContactErrors";
export default function ContactForm() {

    //* Clases para los inputs del formulario
    const [nameContainer,setNameContainer]= useState("inputContainer");
    const [emailContainer,setEmailContainer]= useState("inputContainer");
    const [subjectContainer,setSubjectContainer]= useState("inputContainer");
    const [messageContainer,setMessageContainer]= useState("inputLargeContainer");

    //* API de ReCaptcha
    const [validCaptcha,setValidCaptcha]= useState(null);
    const captcha = useRef(null);
    const onChangeCaptcha=()=>{
        if(captcha.current.getValue()){
            setValidCaptcha(captcha.current.getValue());
        }
    }

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
    const [validName,setValidName]= useState(false);
    const [validEmail,setValidEmail]= useState(false);
    const [validSubject,setValidSubject]= useState(false);
    const [validMessage,setValidMessage]= useState(false);

    const canpos ={

    }
    const [campos,setCampos] = useState();

    const fields =[
        {
            id:"from_name",
            valid:validName,
            setValid:setValidName,
            error:"Ingrese un nombre",
            container: nameContainer,
            setContainer: setNameContainer
        },
        {
            id:"email",
            valid:validEmail,
            setValid:setValidEmail,
            error:"Ingrese un email válido",
            container: emailContainer,
            setContainer: setEmailContainer
        },
        {
            id:"subject",
            valid:validSubject,
            setValid:setValidSubject,
            error:"Ingrese un asunto",
            container: subjectContainer,
            setContainer: setSubjectContainer
        },
        {
            id:"messaje",
            valid:validMessage,
            setValid:setValidMessage,
            error:"Ingrese un mensaje",
            container: "inputContainer",
        },
        {
            id:"captcha",
            valid:validCaptcha,
            setValid:setValidCaptcha,
            error:"Por favor, verifique que no es un robot",
            container: null,
            setContainer: null
        }
    ]

    const [showMessage, setShowMessage] = useState(false);
    
    //*Hook para albergar el componente ContactErrors
    const [errors,setErrors]=useState([]);
    //* Función que detecta el cambio en los campos para las validaciones
    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
        
        //* Validación de nombre
        if(contact.from_name.length>0){
            setValidName(true);
        }else{
            setValidName(false);
        }
        //* Validación de email
        if(contact.from_email.length<0){
            setValidEmail(false);
        }else if(!(contact.from_email.indexOf('@hotmail.com') !== (-1) || contact.from_email.indexOf('@gmail.com') !== (-1) || contact.from_email.indexOf('@outlook.com') !== (-1) || contact.from_email.indexOf('@live.com') !== (-1) || contact.from_email.indexOf('@yahoo.com') !== (-1) || contact.from_email.indexOf('@gmx.') !== (-1) || contact.from_email.indexOf('@aol.com') !== (-1))){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
        
        //* Validación de asunto
        if(contact.subject.length<=0){
            setValidSubject(false);
        }else{
            setValidSubject(true);
        }
        //* Validación de mensaje
        if(contact.message.length<=0){
            setValidMessage(false);
        }else{
            setValidMessage(true);
        }
    };

    //* Función que detecta el evento de presionar el botón ENVIAR
    const handleSubmit = e => {
        //* Prevengo que refresque la página
        e.preventDefault();

        //* Validación de nombre
        if(contact.from_name.length<=0){
            setValidName(false);
        }else{
            setValidName(true);
        }

        //* Validación de email
        if(contact.from_email.length<=0){
            setValidEmail(false);
        }else if(!(contact.from_email.indexOf('@hotmail.com') !== (-1) || contact.from_email.indexOf('@gmail.com') !== (-1) || contact.from_email.indexOf('@outlook.com') !== (-1) || contact.from_email.indexOf('@live.com') !== (-1) || contact.from_email.indexOf('@yahoo.com') !== (-1) || contact.from_email.indexOf('@gmx.') !== (-1) || contact.from_email.indexOf('@aol.com') !== (-1))){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
        
        //* Validación de asunto
        if(contact.subject.length<=0){
            setValidSubject(false);
        }else{
            setValidSubject(true);
        }

        //* Validación de mensaje
        if(contact.message.length<=0){
            setValidMessage(false);
        }else{
            setValidMessage(true);
        }
        

        
        setErrors(
            <ContactErrors fields={fields} />
        );
        
        //* Chequea todos las validaciones
        if(validCaptcha&&validName&&validEmail&&validSubject&&validMessage){
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
        }else{
            //* SINO, muestro los errores y envío alerta para revisar los campos
            console.log("ERROR");
            alert("Por favor revise los campos!")
        }
    }

    return (
        <section id="formContainer">
                
                <form onSubmit={handleSubmit}>
                    <div className={nameContainer} id="inputContainer">
                        <input
                            className="contactSmallInput"
                            id="input"
                            name="from_name"
                            placeholder="Nombre"
                            type="text"
                            value={contact.from_name}
                            onChange={handleChange}
                            onFocus={()=>{setNameContainer("inputContainer inputContainerFocus")}}
                            onBlur={()=>{
                                setNameContainer("inputContainer")
                            }}
                            required
                        />
                    </div>

                    <div className={emailContainer} id="inputContainer">
                        <input
                            className="contactSmallInput"
                            id="input"
                            name="from_email"
                            placeholder="Email"
                            type="text"
                            value={contact.from_email} 
                            onChange={handleChange}
                            onFocus={()=>{setEmailContainer("inputContainer inputContainerFocus")}}
                            onBlur={()=>{setEmailContainer("inputContainer")}}
                            required
                        />
                    </div>
                    <div className={subjectContainer} id="inputContainer">
                        <input
                            className="largeInput"
                            id="input"
                            name="subject"
                            placeholder="Asunto"
                            type="text"
                            value={contact.subject}
                            onChange={handleChange}
                            onFocus={()=>{setSubjectContainer("inputContainer inputContainerFocus")}}
                            onBlur={()=>{setSubjectContainer("inputContainer")}}
                            required
                        />
                    </div>
                    <div className={messageContainer} id="inputContainer">
                        <textarea
                            className="largeInput"
                            id="input"
                            name="message"
                            placeholder="¿Porque deseas contactarte?"
                            value={contact.message}
                            onChange={handleChange}
                            onFocus={()=>{setMessageContainer("inputLargeContainer inputContainerFocus")}}
                            onBlur={()=>{setMessageContainer("inputLargeContainer")}}
                            required
                        />
                    </div>

                    {/* <div className="contactAttachment">
                        <span className='contactAttachmentInput'>
                            <input
                                type="file"
                                name="attachment"
                                className=""
                                id="attachment"
                            />
                        </span>
                        <label 
                            htmlFor="attachment"
                            className='contactLabelAttachment'
                        >
                            <span>
                                <p>Adjuntar archivo</p>
                                <div>Explorar</div>
                            </span>
                        </label>
                    </div> */}

                    {/* RECAPTCHA */}
                    <div className="recaptcha">
                        <ReCAPTCHA
                            ref={captcha}
                            sitekey={credentials.captchaKey}
                            onChange={onChangeCaptcha}
                        />
                    </div>
                    
                        {errors}
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