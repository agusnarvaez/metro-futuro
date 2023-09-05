
import bappsLogo from "../../assets/img/logos/logoBappsFooter.png"
//* COMPONENTS
import FooterSocialLogos from './FooterSocialLogos'
export default function BottomFooter() {

	return (

		<div className="bottomFooter">

					<div className="bapps">
						 <img
							src={bappsLogo}
							alt="bappsLogo"
							title="bappsLogo"
							loading="lazy"
						/>
					</div>

					<FooterSocialLogos/>

				</div>
	)
}