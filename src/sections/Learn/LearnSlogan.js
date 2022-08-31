
import background from '../../assets/img/background/learnSloganBg.svg'

export default function LearnSlogan({text}) {

	return (

		<section id='learnSlogan'>
			
            <h2>{text} con <font color="#004DFF">Metro Futuro</font></h2>

			<img src={background} alt='background' className='sectionBackground' id="learnSloganBackground" />
		</section>

	)
}