//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react";
import ReactGA from 'react-ga';

// Fondo de pantalla
import contactPageBg from "../assets/img/background/contactPageBg.png";

//* COMPONENTES
import HelmetData from "../components/HelmetData";
import ContactSlogan from "../sections/Contact/ContactSlogan";
import ContactForm from "../sections/Contact/ContactForm";

export default function Contact({metaData}) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
      }, []);
    return (
        <main id="contactPage">
            <HelmetData metaData={metaData} />

            <img
                alt="contactPageBg"
                className="sectionBackground--desktop"
                src={contactPageBg}
            />

            <ContactSlogan />

            <ContactForm />

        </main >
    )
}