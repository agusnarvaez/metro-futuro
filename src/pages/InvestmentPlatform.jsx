// IMAGES
import NotFound404ErrorImage from "../assets/img/building.jpg"

// COMPONENTS
import DegradedNavLink from '../components/DegradedNavLink'
import HelmetData from "../components/HelmetData"

export default function InvestmentPlatform({difficulty}) {
	const metaData={
		title:'Metro Futuro | Sitio en mantenimiento',
		description:'Sitio en mantenimiento',
		keywords:'',
		cannonical:''
	}
	return (
	<main className="investment-platform-maintanance" >

			<HelmetData metaData={metaData} />

            <img src={NotFound404ErrorImage} alt='Imagen de error 404' title="Imagen de error 404" loading="lazy"/>

            <div className="sectionInfo">

                <h1>¡La plataforma está en mantenimiento!</h1>

				<h2>Estamos realizando un upgrade en nuestra plataforma tecnológica para mejorar la experiencia de nuestros usuarios. Estaremos volviendo a la brevedad.</h2>

                <DegradedNavLink route="/" text="Volver a la Home" backgroundColor="white" id="404ErrorLinkToHome"/>

                <DegradedNavLink route="/contacto" text="Contáctanos" backgroundColor="white" id="404ErrorLinkToContact"/>
            </div>
	</main>)
}
