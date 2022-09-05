

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
				to:'/learn/blog',
				text: 'Blog'
			},
			{
				to:'/about',
				text: 'Quienes somos'
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
			to:'/contact',
			text: 'Contáctanos'
		},
		{
			to:'/help',
			text: 'Ayuda/FAQ'
		}/* ,
		{
			to:'/privacy',
			text: 'Políticas de privacidad'
		},
		{
			to:'/terms',
			text: 'Términos y condiciones'
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
						<h3>Sumate a</h3>
						<img
							src={metroFuturoLogo} alt="metroFuturoLogo"
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