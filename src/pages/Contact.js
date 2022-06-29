// Importo React
import React, { useState,useRef } from "react";
// Hoja de estilos
import "../assets/css/contact.css";
// Fondo de pantalla
import contactPageBg from "../assets/img/background/contactPageBg.png";

// API de Emails
import emailjs from 'emailjs-com';
// Captcha
import ReCAPTCHA from "react-google-recaptcha";


function Contact() {
    // Clases para los inputs del formulario
    const [nameContainer,setNameContainer]= useState("inputContainer");
    const [emailContainer,setEmailContainer]= useState("inputContainer");
    const [subjectContainer,setSubjectContainer]= useState("inputContainer");
    const [messageContainer,setMessageContainer]= useState("inputLargeContainer");

    // API de ReCaptcha
    const [validCaptcha,setValidCaptcha]= useState(null);
    const captcha = useRef(null);
    const onChangeCaptcha=()=>{
        if(captcha.current.getValue()){
            setValidCaptcha(captcha.current.getValue());
        }
    }

    // API de envíos de mails
    const frmContact = { from_name: '', from_email: '', phone: '', subject: '', message: '', attachment: '' };

    // Variables de validaciones
    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const [validName,setValidName]= useState(false);
    //const [nameError,setNameError]=useState("");
    const [validEmail,setValidEmail]= useState(false);
    //const [emailError,setEmailError]=useState("");
    const [validSubject,setValidSubject]= useState(false);
    //const [subjectError,setSubjectError]=useState("");
    const [validMessage,setValidMessage]= useState(false);
    //const [messageError,setMessageError]=useState("");
    const [errors,setErrors]=useState([]);
    /* setErrors([nameError,emailError,subjectError,messageError]); */
    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
        
    };
    const handleSubmit = e => {
        e.preventDefault();
        // Validación de nombre
        if(contact.from_name.length>0){
            setValidName(true);
        }else{
            setValidName(false);
        }
        // Validación de email
        if(contact.from_email.length<0){
            setValidEmail(false);
        }else if(!(contact.from_email.indexOf('@hotmail.com') !== (-1) || contact.from_email.indexOf('@gmail.com') !== (-1) || contact.from_email.indexOf('@outlook.com') !== (-1) || contact.from_email.indexOf('@live.com') !== (-1) || contact.from_email.indexOf('@yahoo.com') !== (-1) || contact.from_email.indexOf('@gmx.') !== (-1) || contact.from_email.indexOf('@aol.com') !== (-1))){
            setValidEmail(false);
        }else{
            setValidEmail(true);
        }
        
        // Validación de asunto
        if(contact.subject.length<0){
            setValidSubject(false);
        }else{
            setValidSubject(true);
        }
        // Validación de mensaje
        if(contact.message.length<0){
            setValidMessage(false);
        }else{
            setValidMessage(true);
        }
        setErrors(
            <div className="contactErrors">
                <p className={validName?"errorHidden":"errorShown"}>Ingrese un nombre</p>
                <p className={validEmail?"errorHidden":"errorShown"}>Ingrese un email válido</p>
                <p className={validSubject?"errorHidden":"errorShown"}>Ingrese un asunto</p>
                <p className={validMessage?"errorHidden":"errorShown"}>Ingrese un mensaje</p>
                <p className={validCaptcha?"errorHidden":"errorShown"}>Por favor, verifique que no es un robot</p>
            </div>
            );
        if(validCaptcha&&validName&&validEmail&&validSubject&&validMessage){
            emailjs.send('default_service', 'template_b1tdztw', contact, 'gFpiIvrXnj4ZS_Jvk')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setContact(frmContact);
                    setShowMessage(true);
                }, (err) => {
                    console.log('FAILED...', err);
                });
        }else{
            console.log("Ingrese el captcha!");
        }
    }
    
    return (
        <main className="contactPage">
            <img
                alt="contactPageBg"
                className="contactPageBg"
                src={contactPageBg}
            />
            <section className="contactPageSlogan">
                <h1>¡Estamos para <br/><font color="#004DFF">ayudarte</font>!</h1>
                <p>Ponte en contacto con nosotros enviándonos un mensaje</p>
            </section>
            <section className="formContainer">
                
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
                            onBlur={()=>{setNameContainer("inputContainer")}}
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
                            sitekey="6LcVEKsgAAAAAKed1cNnnSsGtRZa3XVz1Nmibgrn"
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
        </main >
    )
}

export default Contact;