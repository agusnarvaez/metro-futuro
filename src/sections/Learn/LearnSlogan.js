
import background from '../../assets/img/background/learnSloganBg.svg'

//* Importo la función que selecciona el título del Slogan
import { selectTitle } from '../../Functions/learnFunctions';

export default function LearnSlogan({path}) {
	return (
		<section id='learnSlogan'>
            <h2>{selectTitle(path)} con <font color="#004DFF">Metro Futuro</font></h2>

			<img src={background} alt='background' className='sectionBackground' id="learnSloganBackground" />
		</section>

	)
}