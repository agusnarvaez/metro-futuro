import React from 'react';
import background from '../../assets/img/background/learnSloganBg.svg'
function LearnSlogan() {

	return (

		<section id='learnSlogan'>
			{/* <div className="sloganText">
            </div> */}
            <h2>Aprende con <font color="#004DFF">Metro Futuro</font></h2>

			<img src={background} alt='background' className='sectionBackground' id="learnSloganBackground" />
		</section>

	)
}
export default LearnSlogan;