import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import FormButton from '../../components/Contact/FormButton'
//* Importo la función que selecciona el título del Slogan

export default function LearnSlogan({path,setShowPopUp}) {
	const { register, handleSubmit, formState: { errors } } = useForm()

	const [buttonClass, setButtonClass] = useState('contactSubmit degradedLink')

	//* ponytail: sitio demo de portfolio, no se registra a nadie: solo da acceso a la academia
	const onSubmit = () => {
		Cookies.set('isRegistered', 'true', { expires: 60 })
		setButtonClass('contactSubmit degradedLink contactSubmit--success')
		setShowPopUp(false)
	}
	return (
		<section id='learnPopUp'>
            <h2>Completa unos pocos datos para acceder a nuestra academia de recursos educativos</h2>
			<h3>Hazte parte de nuestra comunidad.</h3>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='input-wrapper'>
					<div className="inputContainer">
						<input
						{...register('name', { required: true })}
						placeholder='Nombre'
						/>
					</div>
					{errors.name && <span className="error">El nombre es obligatorio</span>}
				</div>
				<div className='input-wrapper'>
					<div className="inputContainer">
						<input
						{...register('last_name', { required: true })}
						placeholder='Apellido'
						/>
					{errors.last_name && <span className="error">El apellido es obligatorio</span>}
					</div>
				</div>
				<div className='input-wrapper'>
					<div className="inputContainer">
					<input
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
					placeholder='Email'
					/>
					</div>
				{errors.email && <span className="error">Este campo es obligatorio y debe ser un email válido</span>}
				</div>
				<div className="cookies-container input-wrapper">
					<label for='learn-cookies'>Aceptar Cookies</label>
					<input
						id='learn-cookies'
						{...register('learnCookies', { required: true })}
						type='checkbox'
					/>
					{errors.learnCookies && <span className="error">Debe aceptar las cookies para poder ingresar. <Link to='/cookie-politics'>¿Porque?</Link></span>}
				</div>
				{/* <button className='degradedLink' type='submit'>
					<div className='degradedLink_TextContainer degradedLink_TextContainer--white'>
						<span className='degradedLink_Text'>Enviar</span>
					</div>
				</button> */}
				<FormButton buttonClass={buttonClass} setButtonClass={setButtonClass} />
			</form>
		</section>
	)
}