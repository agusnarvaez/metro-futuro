//* ### COMPONENTE FOOTER ###

//* REACT-ROUTER-DOM
import { NavLink, useLocation } from 'react-router-dom'

//* IMAGES
import footerLeftBg from "../../assets/img/background/footerBg.svg"

//* COMPONENTSi
import BottomFooter from './BottomFooter'
import TopFooter from './TopFooter'
import FooterSocialLogos from './FooterSocialLogos'


export default function Footer() {

	//* Obtener la ruta actual
	const location = useLocation().pathname

	//* Cambia color del fondo segun la ruta actual
	const changeBgColor = () => {
		switch(location){
			case "/": return("homeFooterBg")
			case "/sobre-nosotros": return("aboutFooterBg")
			default: return("")
		}
	}


	return (

		<>
			<div className={changeBgColor()} ></div>
			<div className='footerContainer'>
				<div class="svgContainer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" class="w-full h-24 md:h-32"><path fill="#004cff" fill-opacity="1" d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,192C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>
				<div className='bgFooterContainer'>
					<img className='mainFooterBackground' alt="footerBackground" title='footerBackground' src={footerLeftBg} loading="lazy"/>
				</div>
				<footer className="mainFooter">
					<TopFooter />
					<BottomFooter />
				</footer >
			</div>

		</>
	)
}