

//* IMAGES
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogo.png"

//* COMPONENTS
import FooterLinks from './FooterLinks'

export default function BottomFooter() {

	const leftLinks ={
		title: "Metro Futuro",
		className: "leftLinks",
		content:[
			{
				to:'https://metro-futuro.com',
				text: 'Home'
			},
			{
				to:'https://metro-futuro.com/nosotros',
				text: 'Quienes somos'
			},
			{
				to:'https://metro-futuro.com',
				text: 'Inmuebles'
			},/* ,
			{
				to:'/aprende',
				text: 'Academy'
			},
			{
				to:'/blog',
				text: 'Blog'
			}, */
			{
				to:'https://metro-futuro.com/contacto',
				text: 'Contáctanos'
			}
		]
	}

	const rightLinks={
		title: "Recursos",
		className: "rightLinks",
		content:[
		{
			to:'https://metro-futuro.com/faq',
			text: 'Ayuda/FAQ'
		},
		{
			to:'https://metro-futuro.com/tyc',
			text: 'Términos y condiciones'
		}
	]}


	//* Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }

	return (

		<div className="topFooter">

					<div className='footerMetroLogo'>
						<h2>Sumate a</h2>
						<img
							src={metroFuturoLogo} alt="metroFuturoLogo" title="metroFuturoLogo" loading="lazy"
						/>
					</div>

					<div className="footerLinks">

						<FooterLinks
							scrollToTop={scrollToTop}
							title={leftLinks.title}
							className={leftLinks.className}
							links={leftLinks.content}
						/>

						<FooterLinks
							scrollToTop={scrollToTop}
							title={rightLinks.title}
							className={rightLinks.className}
							links={rightLinks.content}
						/>

					</div>

				</div>
	)
}