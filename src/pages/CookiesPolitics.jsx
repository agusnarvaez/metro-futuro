//* ### PÁGINA DE TÉRMINOS Y CONDICIONES ###

import { Link } from "react-router-dom"
import HelmetData from "../components/HelmetData"


export default function CookiesPolitics({metaData}) {
    return (

        <main className='termsPage'>
            <HelmetData metaData={metaData} />
            <h1>Política de Privacidad: Uso de Cookies</h1>
            <h2>Última actualización: 08/02/2024</h2>
            <p>
                En Metro Futuro, nos comprometemos a proteger la privacidad de nuestros usuarios y a proporcionar una experiencia segura y funcional. Este segmento de nuestra Política de Privacidad explica cómo y por qué utilizamos cookies en nuestro sitio web.
            </p>
            <h3>¿Que son las Cookies?</h3>
            <p>
            Una cookie es un pequeño archivo de texto que un sitio web almacena en tu ordenador o dispositivo móvil cuando lo visitas. Este archivo permite al sitio recordar tus acciones y preferencias (como inicio de sesión, idioma, tamaño de letra y otras preferencias de visualización) durante un periodo de tiempo, por lo que no tienes que volver a ingresarlos cada vez que regresas al sitio o navegas de una página a otra.
            </p>
            <h3>Uso de Cookies en Nuestro Sitio</h3>
            <p>
                Utilizamos una cookie específica para una función crucial: verificar si un usuario ha enviado sus datos a través de nuestro formulario de ingreso a cursos en línea. Esta cookie es esencial para:
            </p>
            <ul>
                <li>Permitir la funcionalidad del formulario de inscripción, asegurando una experiencia de usuario fluida y efectiva.</li>
                <li>Evitar solicitudes duplicadas y mejorar la seguridad al procesar la información de los formularios enviados.</li>
            </ul>
            <h3>Detalles de la Cookie Utilizada</h3>
            <ul>
                <li>Nombre de la Cookie: isRegistered</li>
                <li>Propósito: Verificación del envío de formulario.</li>
                <li>Duración: Esta cookie es temporal y se elimina automáticamente después de 30 días.</li>
            </ul>
            <h3>Consentimiento y Control de Cookies</h3>
            <p>
            Al utilizar nuestro sitio web, se te solicitará tu consentimiento para el uso de esta cookie esencial a través de un mensaje de aceptación de cookies. Aunque esta cookie es necesaria para ciertas funcionalidades del sitio, es importante para nosotros informarte sobre su uso y obtener tu consentimiento.
            </p>
            <p>
            Puedes controlar y/o eliminar cookies como desees - para detalles, consulta aboutcookies.org. Puedes eliminar todas las cookies que ya están en tu computadora y puedes configurar la mayoría de los navegadores para prevenir que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y algunos servicios y funcionalidades pueden no funcionar.
            </p>
            <p>Si tienes alguna pregunta o preocupación sobre nuestro uso de cookies, no dudes en contactarnos a través de nuestro <Link to='/contacto'>contacto.</Link></p>
        </main>
    )
}
