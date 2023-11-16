

//* IMAGES
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogo.png";

//* COMPONENTS
import FooterLinks from './FooterLinks';

export default function BottomFooter() {

	const leftLinks ={
		title: "Metro Futuro",
		className: "leftLinks",
		content:[
			{
				to:'/',
				text: 'Home'
			},
			{
				to:'/sobre-nosotros',
				text: 'Quienes somos'
			},
		/* 	{
				to:'/inmuebles',
				text: 'Inmuebles'
			}, */
			{
				to:'/aprende',
				text: 'Academy'
			},
			{
				to:'/blog',
				text: 'Blog'
			},
			{
				to:'/contacto',
				text: 'Contáctanos'
			}/* ,
			{
				to:'/investments/list',
				text: 'Inversiones'
			} */
		]
	}

	const rightLinks={
		title: "Recursos",
		className: "rightLinks",
		content:[
		{
			to:'/ayuda',
			text: 'Ayuda/FAQ'
		},
		{
			to:'/terminos-y-condiciones',
			text: 'Términos y condiciones'
		}/* ,
		{
			to:'/privacy',
			text: 'Políticas de privacidad'
		} */
	]}


	//* Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

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