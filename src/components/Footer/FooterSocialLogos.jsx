//* ### COMPONENTE FOOTER ###

//* IMAGES
/* import instagramLogo from "../../assets/img/icons/instagramLogo.svg"

//TODO: ESPERAR A QUE JUAN GENERE LAS REDES
import linkedinLogo from "../../assets/img/icons/linkedInLogo.svg"
import twitterLogo from "../../assets/img/icons/twitterLogo.svg"
import telegramLogo from "../../assets/img/icons/telegramLogo.png"
import youTubeLogo from "../../assets/img/icons/youTubeLogo.svg"
import tikTokLogo from "../../assets/img/icons/tiktokLogo.svg" */
import tikTokLogo from "../../assets/img/icons/tiktokLogo.svg"

export default function FooterSocialLogos() {
	const socialLogos = [
		{
			className: "instagramLogo",
			src: 'fa-brands fa-instagram',
			href: "https://www.instagram.com/metrofuturo/"
		},
		{
			className: "linkedinLogo",
			src: 'fa-brands fa-linkedin',
			href: "https://www.linkedin.com/company/metro-futuro/posts/?feedView=all"
		},
		{
			className: "twitterLogo",
			src: 'fa-brands fa-twitter',
			href: "https://x.com/Metrofuturo"
		},
		{
			className: "youTubeLogo",
			src: 'fa-brands fa-youtube',
			href: "https://www.youtube.com/channel/UCmiKhrSZxmtVFlz7wt1dcKw"
		},
		{
			className: "tikTokLogo",
			src: 'fa-brands fa-tiktok',
			href: "https://www.tiktok.com/@metrofuturo"
		},
		{
			className: "telegramLogo",
			src: 'fa-brands fa-telegram',
			href: "https://t.me/metrofuturodefi"
		},

	]

	const isSvg = (src) => {
		const svgPattern = /\.svg$/i; // Expresión regular para verificar si es un SVG
		console.log(src,svgPattern.test(src))
		return svgPattern.test(src);
	}

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
									{<i
										className={socialLogo.src}
									/>}

								</div>
							</a>
						)
					}
				)
			}
		</div>
	)
}