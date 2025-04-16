

//* IMAGES
import metroFuturoLogo from "../../assets/img/logos/metroFuturoLogo.svg"

//* COMPONENTS
import FooterSocialLogos from './FooterSocialLogos'
import { NavLink } from 'react-router-dom'
export default function BottomFooter() {

	//* Función para scrollear hacia arriba cada vez que se toca un enlace
    const scrollToTop = () =>{
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (

		<div className="topFooter">
			<section>
				<h2>Metro Futuro</h2>
				<p>Inversiones inmobiliarias en blockchain</p>
				<FooterSocialLogos/>
				<ul className="footerLocation">
					<li>Metro Futuro DeFi SL (B72928500)</li>
					<li>Calle Augusto Plasencia, Num 1 - Sevilla, España</li>
					<li>Metro Futuro SRL (30718689410)</li>
					<li>Tucuman 1 Piso 4 - CABA, Argentina</li>
				</ul>
			</section>
			<section>
				<h3>Empresa</h3>
				<a
					className='footerLink'
					href={`https://metro-futuro.com/nosotros`}  // Asegura que incluya el protocolo
					title='Quienes somos'
					target="_self"  // Abre en la misma pestaña
					rel="noopener noreferrer"  // Seguridad adicional para evitar vulnerabilidades de redirección
				>
					Quienes somos
				</a>
				<a
					className='footerLink'
					href={`https://metro-futuro.com/faq`}  // Asegura que incluya el protocolo
					title='Quienes somos'
					target="_self"  // Abre en la misma pestaña
					rel="noopener noreferrer"  // Seguridad adicional para evitar vulnerabilidades de redirección
				>
					FAQ
				</a>
				<NavLink
					className='footerLink'
					to='/blog'  // Asegura que incluya el protocolo
				>
					Blog
				</NavLink>
			</section>
			<section>
				<h3>Inmuebles</h3>
				<a
					className='footerLink'
					href={`https://metro-futuro.com/inmuebles`}  // Asegura que incluya el protocolo
					title='Quiero invertir'
					target="_self"  // Abre en la misma pestaña
					rel="noopener noreferrer"  // Seguridad adicional para evitar vulnerabilidades de redirección
				>
					Quiero invertir
				</a>
			</section>
			<section className="footerContact">
				<h3>Contacto</h3>
				<ul>
					<li>
						<h4>Teléfono</h4>
						<a
							className='footerLink'
							href='https://api.whatsapp.com/send?phone=541164925109&text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Metro%20Futuro'  // Asegura que incluya el protocolo
							title='Quiero invertir'
							target="_self"  // Abre en la misma pestaña
							rel="noopener noreferrer"  // Seguridad adicional para evitar vulnerabilidades de redirección
						>
							+54 11 6492-5109
						</a>
					</li>
					<li>
						<h4>Email</h4>
						<a
							className='footerLink'
							href='info@metro-futuro.com'  // Asegura que incluya el protocolo
							title='info@metro-futuro.com'
							target="_self"  // Abre en la misma pestaña
							rel="noopener noreferrer"  // Seguridad adicional para evitar vulnerabilidades de redirección
						>
							info@metro-futuro.com
						</a>
					</li>
				</ul>
			</section>
		</div>
	)
}