
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import "../assets/css/contact.css";
import contactPageBg from "../assets/img/background/contactPageBg.png";

function Contact() {
    const [nameContainer,setNameContainer]= useState("inputContainer");
    const [emailContainer,setEmailContainer]= useState("inputContainer");
    const [subjectContainer,setSubjectContainer]= useState("inputContainer");
    const [messageContainer,setMessageContainer]= useState("inputLargeContainer");


    const frmContact = { from_name: '', from_email: '', phone: '', reason: '', message: '', attachment: '' };

    const [contact, setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.send('default_service', 'template_b1tdztw', contact, 'gFpiIvrXnj4ZS_Jvk')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setContact(frmContact);
                setShowMessage(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }
    /* let input = window.getElementById("input"); */
    /* let inputContainer = window.getElementById("inputContainer"); */
    
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
                            onFocus={()=>{setNameContainer("inputContainer inputContainerFocus")}}
                            onChange={handleChange}
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
                            onFocus={()=>{setEmailContainer("inputContainer inputContainerFocus")}}
                            onChange={handleChange}
                            onBlur={()=>{setEmailContainer("inputContainer")}}
                            required
                        />
                    </div>
                    <div className={subjectContainer} id="inputContainer">
                        <input
                            className="largeInput"
                            id="input"
                            name="reason"
                            placeholder="Asunto"
                            type="text"
                            value={contact.reason}
                            onFocus={()=>{setSubjectContainer("inputContainer inputContainerFocus")}}
                            onChange={handleChange}
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
                            onFocus={()=>{setMessageContainer("inputLargeContainer inputContainerFocus")}}
                            onChange={handleChange}
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


                    <button className="contactSubmit" type="submit">Enviar</button>


                    {showMessage ? <div className="alertSuccess" role="alert">Enviado con éxito!</div> : ``}
                </form >
            </section>
        </main >
    )
}

export default Contact;