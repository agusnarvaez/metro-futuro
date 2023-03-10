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
			case "/": return("homeFooterBg");
			case "/sobreNosotros": return("aboutFooterBg");
			default: return("");
		}
	}


	return (

		<>
			<div className={changeBgColor()} ></div>

			<footer className="mainFooter">
				
				<img className='mainFooterBackgroundLeft' alt="footerBackground" src={footerLeftBg} />
				<img className='mainFooterBackgroundRight' alt="footerBackground" src={footerRightBg} />
				
				<TopFooter/>

				<BottomFooter/>

			</footer >

		</>
	)
}