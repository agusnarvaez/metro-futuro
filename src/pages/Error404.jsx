
// IMAGES
import NotFound404ErrorImage from "../assets/img/404Error.svg";

// COMPONENTS
import DegradedNavLink from '../components/DegradedNavLink';
import HelmetData from "../components/HelmetData";

export default function Error404({metaData}) {

    return (
        <main className="NotFound404ErrorPage" id="NotFound404ErrorPage">
            <HelmetData metaData={metaData} />
            
            <img src={NotFound404ErrorImage} alt='Imagen de error 404' title="Imagen de error 404" loading="lazy"/>

            <div className="sectionInfo">
                
                <h1>¡Lo sentimos! La página que estás buscando no pudo ser encontrada</h1>
                
                <DegradedNavLink route="/inicio" text="Volver a la Home" backgroundColor="white" id="404ErrorLinkToHome"/>
                
                <DegradedNavLink route="/contacto" text="Contáctanos" backgroundColor="white" id="404ErrorLinkToContact"/>
            </div>
        </main>
    )
};