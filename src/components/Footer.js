import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/css/footer.css";
import footerRightBg from "../assets/img/background/footerRightBg.svg"
import footerLeftBg from "../assets/img/background/footerLeftBg.svg"
function Footer() {

	return (

		<React.Fragment>
			<footer className="mainFooter">
				{/* <div className='mainFooterBackground'> */}
					<img className='mainFooterBackgroundLeft' alt="footerBackground" src={footerLeftBg} />
					<img className='mainFooterBackgroundRight' alt="footerBackground" src={footerRightBg} />
				{/* </div> */}
				<div className="topFooter">
					<div className='footerMetroLogo'>
						<h3>Sumate a</h3>
						<img
							src="./assets/images/icons/metroFuturoLogo.png" alt="metroFuturoLogo"
						/>
					</div>
					<div className="footerLinks">
						<ul className="leftLinks">
							<li><h4>Metro futuro</h4></li>
							<li ><NavLink to='/'>Home</NavLink></li>
							<li><NavLink to='/investments/list'>Inversiones</NavLink></li>
							<li><NavLink to='/academy'>Academia</NavLink></li>
							<li><NavLink to='/about'>Quienes somos</NavLink></li>
						</ul>
						<ul className="rightLinks">
							<li><h4>Recursos</h4></li>
							<li ><NavLink to='/contact'>Contactanos</NavLink></li>
							<li><NavLink to='/help/faq'>Ayuda/FAQ</NavLink></li>
							<li><NavLink to='/academy'>Políticas de privacidad</NavLink></li>
							<li><NavLink to='/about'>Términos y condiciones</NavLink></li>
						</ul>
					</div>
				</div>
				<div className="bottomFooter">
					<div className="briken">
						<p>Powered by  </p>
						<img
							src="./assets\images\icons\brikenLogo.png"
							alt="brikenLogo"
						/>
					</div>
					<div className='footerSocials'>
						<a target="_blank" href="/">
							<div className="instagramLogo">
								<img
									src="./assets\images\icons\instagramLogo.svg"
									alt="instagramLogo"
								/>
							</div>
						</a>
						<a target="_blank" href="/">
							<div className="twitterLogo">
								<img
									src="./assets\images\icons\twitterLogo.svg"
									alt="twitterLogo"
								/>
							</div>
						</a>
						<a target="_blank" href="/">
							<div className="linkedInLogo">
								<img
									src="./assets\images\icons\linkedInLogo.svg"
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