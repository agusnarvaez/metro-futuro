import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import credentials from '../../credentials'
import { Link } from 'react-router-dom'
//* Importo la función que selecciona el título del Slogan

export default function LearnSlogan({path,setShowPopUp}) {
	const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${credentials.metroFuturoApi}/users`, { // Reemplaza con la URL de tu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      /* const responseData = await response.json() */
      if (response.status>=200) {
        Cookies.set('isRegistered', 'true', { expires: 30 }) // La cookie expira en 7 días
        setShowPopUp(false) // Ocultar el PopUp después de registrar
      } else {
        // Manejar la respuesta no exitosa
		console.log(response.status)
        console.log('Registro fallido')
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  }
	return (
		<section id='learnPopUp'>
            <h2>Completa unos pocos datos para acceder a nuestra academia de recursos educativos</h2>
			<h3>Hazte parte de nuestra comunidad.</h3>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="inputContainer">
					<input
					{...register('name', { required: true })}
					placeholder='Nombre'
					/>
				</div>
				{errors.name && <span className="error">Este campo es obligatorio</span>}
				<div className="inputContainer">
					<input
					{...register('last_name', { required: true })}
					placeholder='Apellido'
					/>
				</div>
				{errors.last_name && <span className="error">Este campo es obligatorio</span>}
				<div className="inputContainer">
					<input
					{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
					placeholder='Email'
					/>
				</div>
				{errors.email && <span className="error">Este campo es obligatorio y debe ser un email válido</span>}
				<div className="cookies-container">
					<label for='learn-cookies'>Aceptar Cookies</label>
					<input
						id='learn-cookies'
						{...register('learnCookies', { required: true })}
						type='checkbox'
					/>
				</div>
				{errors.learnCookies && <span className="error">Debe aceptar las cookies para poder ingresar. <Link to='/cookie-politics'>¿Porque?</Link></span>}
				<button className='degradedLink' type='submit'>
					<div className='degradedLink_TextContainer degradedLink_TextContainer--white'>
						<span className='degradedLink_Text'>Enviar</span>
					</div>
				</button>
			</form>
		</section>
	)
}