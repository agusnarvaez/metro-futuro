import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "../assets/css/footer.css";
import footerRightBg from "../assets/img/background/footerRightBg.svg"
import footerLeftBg from "../assets/img/background/footerLeftBg.svg"
import brikenLogo from "../assets/img/logos/brikenLogo.png";
import metroFuturoLogo from "../assets/img/logos/metroFuturoLogo.png";
import instagramLogo from "../assets/img/icons/instagramLogo.svg";
import linkedinLogo from "../assets/img/icons/linkedInLogo.svg";
import twitterLogo from "../assets/img/icons/twitterLogo.svg";
function Footer() {
	// Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
	  	// Obtener la ruta actual
		const location = useLocation().pathname;
		// Cambia color segun la ruta actual
		const changeBgColor = () => {
			switch(location){
				case "/": return("homeFooterBg");
				case "/about": return("aboutFooterBg");
				default: return("");
			}
		}
	return (

		<React.Fragment>
			<div className={changeBgColor()} ></div>
			<footer className="mainFooter">
				{/* <div className='mainFooterBackground'> */}
					<img className='mainFooterBackgroundLeft' alt="footerBackground" src={footerLeftBg} />
					<img className='mainFooterBackgroundRight' alt="footerBackground" src={footerRightBg} />
				{/* </div> */}
				<div className="topFooter">
					<div className='footerMetroLogo'>
						<h3>Sumate a</h3>
						<img
							src={metroFuturoLogo} alt="metroFuturoLogo"
						/>
					</div>
					<div className="footerLinks">
						<ul className="leftLinks">
							<li><h4>Metro futuro</h4></li>
							<li>
								<NavLink
									onClick={scrollToTop}
									to='/'
								>Home
								</NavLink>
							</li>
							{/* <li>
								<NavLink
									onClick={scrollToTop}
									to='/investments/list'
								>Inversiones
								</NavLink>
							</li> */}
							{/* <li>
								<NavLink
									onClick={scrollToTop}
									to='/academy'
								>Academia
								</NavLink>
							</li> */}
							<li>
								<NavLink
									onClick={scrollToTop}
									to='/about'
								>
								Quienes somos</NavLink>
							</li>
						</ul>
						<ul className="rightLinks">
							<li><h4>Recursos</h4></li>
							<li><NavLink onClick={scrollToTop} to='/contact'>Contactanos</NavLink></li>
							<li><NavLink onClick={scrollToTop} to='/help'>Ayuda/FAQ</NavLink></li>
							{/* <li><NavLink onClick={scrollToTop} to='/privacy'>Políticas de privacidad</NavLink></li> */}
							{/* <li><NavLink onClick={scrollToTop} to='/about'>Términos y condiciones</NavLink></li> */}
						</ul>
					</div>
				</div>
				<div className="bottomFooter">
					<div className="briken">
						<p>Powered by  </p>
						<img
							src={brikenLogo}
							alt="brikenLogo"
						/>
					</div>
					<div className='footerSocials'>
						<a target="_blank" href="/">
							<div className="instagramLogo">
								<img
									src={instagramLogo}
									alt="instagramLogo"
								/>
							</div>
						</a>
						<a target="_blank" href="/">
							<div className="twitterLogo">
								<img
									src={twitterLogo}
									alt="twitterLogo"
								/>
							</div>
						</a>
						<a target="_blank" href="/">
							<div className="linkedInLogo">
								<img
									src={linkedinLogo}
									alt="linkedInLogo"
								/>
							</div>
						</a>
					</div>

				</div>
			</footer >

		</React.Fragment>
	)
}
export default Footer;