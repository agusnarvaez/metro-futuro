
import React, { /* useEffect */ useState } from "react";
import emailjs from 'emailjs-com'
import "../assets/css/contact.css"

function Contact() {
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

    return (
        <main>
            <div className="formContainer">

                <form onSubmit={handleSubmit}>
                    <h2> Contacto</h2>
                    <input
                        required
                        type="text"
                        value={contact.from_name} name="from_name"
                        onChange={handleChange} className="smallInput"
                        placeholder="Nombre"
                    />

                    <input
                        value={contact.phone} required type="text" name="phone" onChange={handleChange} className="smallInput" placeholder="Telefono"
                    />

                    <input
                        required
                        value={contact.from_email} type="text" name="from_email" onChange={handleChange} className="largeInput"
                        placeholder="Email"
                    />



                    <input
                        required
                        className="largeInput"
                        value={contact.reason}
                        type="text"
                        name="reason"
                        onChange={handleChange} placeholder="Motivo de contacto"
                    />
                    <textarea
                        required
                        className="largeInput" name="message"
                        onChange={handleChange}
                        placeholder="Mensaje"
                        value={contact.message}
                    />
                    <div className="attachment">
                        <span class='attachment'>
                            <input type="file" name="attachment" class="" id="attachment" />
                        </span>
                        <label for="attachment" class='labelAttachment'>
                            <span ><img alt="attachment" src="../assets/images/icons/attachment.svg" /><p>Adjuntar archivo</p></span>
                        </label>
                    </div>


                    <button className="submit">Enviar</button>


                    {showMessage ? <div className="alertSuccess" role="alert">Enviado con éxito!</div> : ``}
                </form >
            </div>
        </main >
    )
}

export default Contact;