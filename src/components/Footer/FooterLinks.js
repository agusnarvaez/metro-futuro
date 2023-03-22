//* ### COMPONENTE FOOTER-RIGHT-LINKS ###
import { NavLink } from 'react-router-dom';

export default function FooterLinks({scrollToTop,links,title}) {
	
	return (
	
		<ul className="rightLinks">

			<li><h3>{title}</h3></li>

			{
				links.map((link, key) => { return (
					<li key={key}><NavLink onClick={scrollToTop} title={link.text} to={link.to}>{link.text}</NavLink></li>
					)})
			}
			
		</ul>
	)
}