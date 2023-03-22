//* ### COMPONENTE FOOTER ###

//* IMAGES
import instagramLogo from "../../assets/img/icons/instagramLogo.svg";

//TODO: ESPERAR A QUE JUAN GENERE LAS REDES
import linkedinLogo from "../../assets/img/icons/linkedInLogo.svg"
import twitterLogo from "../../assets/img/icons/twitterLogo.svg"
import telegramLogo from "../../assets/img/icons/telegramLogo.png"
import youTubeLogo from "../../assets/img/icons/youTubeLogo.svg"
export default function FooterSocialLogos() {
	const socialLogos = [
		{
			className: "instagramLogo",
			src: instagramLogo,
			href: "https://www.instagram.com/metrofuturo/"
		},
		{
			className: "linkedinLogo",
			src: linkedinLogo,
			href: "https://www.linkedin.com/company/metro-futuro/"
		},
		{
			className: "twitterLogo",
			src: twitterLogo,
			href: "https://twitter.com/Metrofuturo"
		},
		{
			className: "telegramLogo",
			src: telegramLogo,
			href: "https://t.me/metrofuturodefi"
		},
		{
			className: "youTubeLogo",
			src: youTubeLogo,
			href: "https://www.youtube.com/channel/UCmiKhrSZxmtVFlz7wt1dcKw"
		} 

	];
	
	return (

		<div className='footerSocials'>
			{
				socialLogos.map(
					(socialLogo,key)=> {
						return(
							<a 
								key={key}
								target="_blank"
								href={socialLogo.href}
								rel="noreferrer"
								title={socialLogo.className}
								>
								<div className={socialLogo.className}>
									<img
										src={socialLogo.src}
										alt={socialLogo.className}
										title={socialLogo.className}
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