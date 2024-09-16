import { useState, useRef } from "react";
import { useForm } from "react-hook-form";  // Importamos react-hook-form
import emailjs from 'emailjs-com';
import { fieldsList } from "../../utils/contactFields";
import credentials from "../../credentials";
import ContactInputs from "../../components/Contact/ContactInputs";
import FormButton from "../../components/Contact/FormButton";

export default function ContactForm() {
    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const [buttonClass, setButtonClass] = useState("contactSubmit degradedLink");
    const [successMessage, setSuccessMessage] = useState(false);
    const fields = useRef(fieldsList);

    const onSubmit = async (data) => {
        setButtonClass("contactSubmit contactSubmit--loading");

        try {
            await emailjs.send(
                credentials.emailJs.service,
                credentials.emailJs.template,
                data,
                credentials.emailJs.id
            );
            console.info('SUCCESS!');
            reset();
            setButtonClass("contactSubmit degradedLink contactSubmit--success");
            setSuccessMessage(true);
        } catch (error) {
            console.error('ERROR:\n', error);
            setButtonClass("contactSubmit contactSubmit--error");
        }
    };

    return (
        <section id="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <ContactInputs fields={fields.current} register={register} errors={errors} />
                <FormButton buttonClass={buttonClass} setButtonClass={setButtonClass} />
                {successMessage && <p>Gracias por tu interés. En breve, un representante de Metro Futuro se estará comunicando contigo.</p>}
            </form>
        </section>
    );
}
