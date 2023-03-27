
import brikenLogo from "../../assets/img/logos/brikenLogo.png";
//* COMPONENTS
import FooterSocialLogos from './FooterSocialLogos';
export default function BottomFooter() {
	
	return (
	
		<div className="bottomFooter">

					<div className="briken">
						<p>Powered by  </p>
						<img
							src={brikenLogo}
							alt="brikenLogo"
							title="brikenLogo"
							loading="lazy"
						/>
					</div>
					
					<FooterSocialLogos/>

				</div>
	)
}