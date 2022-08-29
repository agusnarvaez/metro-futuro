//* ### COMPONENTE FOOTER-RIGHT-LINKS ###
import { NavLink } from 'react-router-dom';

export default function FooterLinks({scrollToTop,links,title}) {
	
	return (
	
		<ul className="rightLinks">

			<li><h4>{title}</h4></li>

			{
				links.map((link, key) => { return (
					<li key={key}><NavLink onClick={scrollToTop} to={link.to}>{link.text}</NavLink></li>
					)})
			}
			
		</ul>
	)
}