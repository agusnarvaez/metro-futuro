//* ### COMPONENTE FOOTER ###

//* REACT-ROUTER-DOM
import { useLocation } from 'react-router-dom';

//* IMAGES
import footerRightBg from "../../assets/img/background/footerRightBg.svg"
import footerLeftBg from "../../assets/img/background/footerLeftBg.svg"

//* COMPONENTSi
import BottomFooter from './BottomFooter';
import TopFooter from './TopFooter';


export default function Footer() {
	
	//* Obtener la ruta actual
	const location = useLocation().pathname;

	//* Cambia color del fondo segun la ruta actual
	const changeBgColor = () => {
		switch(location){
			case "/inicio": return("homeFooterBg");
			case "/sobre-nosotros": return("aboutFooterBg");
			default: return("");
		}
	}


	return (

		<>
			<div className={changeBgColor()} ></div>

			<footer className="mainFooter">
				
				<img className='mainFooterBackgroundLeft' alt="footerBackground" title='footerBackground' src={footerLeftBg} loading="lazy"/>
				<img className='mainFooterBackgroundRight' alt="footerBackground" title='footerBackground' src={footerRightBg} loading="lazy"/>
				
				<TopFooter/>

				<BottomFooter/>

			</footer >

		</>
	)
}