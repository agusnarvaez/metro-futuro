
import bappsLogo from "../../assets/img/logos/logoBappsFooter.png"
//* COMPONENTS

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
			<ul>
				<li>
					<a href="https://metro-futuro.com/privacy-policies" rel="noopener noreferrer">Política de privacidad</a>
				</li>
				<li>
					<a href="https://metro-futuro.com/tyc" rel="noopener noreferrer">Términos y condiciones</a>
				</li>
			</ul>

		</div>
	)
}