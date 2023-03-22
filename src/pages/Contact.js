

// Fondo de pantalla
import contactPageBg from "../assets/img/background/contactPageBg.svg";

//* COMPONENTES
import HelmetData from "../components/HelmetData";
import ContactSlogan from "../sections/Contact/ContactSlogan";
import ContactForm from "../sections/Contact/ContactForm";

export default function Contact({metaData}) {
    return (
        <main id="contactPage">
            <HelmetData metaData={metaData} />

            <img
                alt="contactPageBg"
                title="contactPageBg"
                className="sectionBackground--desktop"
                src={contactPageBg}
            />

            <ContactSlogan />

            <ContactForm />

        </main >
    )
}