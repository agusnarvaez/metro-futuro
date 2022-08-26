//* ### COMPONENTE FOOTER ###

//* IMAGES
import instagramLogo from "../../assets/img/icons/instagramLogo.svg";

//TODO: ESPERAR A QUE JUAN GENERE LAS REDES
/* import linkedinLogo from "../../assets/img/icons/linkedInLogo.svg";
import twitterLogo from "../../assets/img/icons/twitterLogo.svg"; */


export default function FooterSocialLogos() {
	const socialLogos = [
		{
			className: "instagramLogo",
			src: instagramLogo,
			href: "https://www.instagram.com/metrofuturo/"
		}/* ,
		{
			className: "linkedinLogo",
			src: linkedinLogo,
			href: "https://www.instagram.com/metrofuturo/"
		},
		{
			className: "twitterLogo",
			src: twitterLogo,
			href: "https://www.instagram.com/metrofuturo/"
		} */

	];
	
	return (

		<div className='footerSocials'>
			{
				socialLogos.map(
					(socialLogo)=> {
						return(
							<a 
								target="_blank"
								href={socialLogo.href}
								rel="noreferrer"
								>
								<div className={socialLogo.className}>
									<img
										src={socialLogo.src}
										alt={socialLogo.className}
									/>
								</div>
							</a>
						)
					}
				)
			}
		</div>
	)
}