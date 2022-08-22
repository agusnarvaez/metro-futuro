import React from 'react';
import learnDemoImage from '../../assets/img/learn/learnCoursesCardDemo.jpg'
import LearnCoursesCardDificulty from './LearnCoursesCardDificulty.js'
import DegradedNavLink from '../../components/DegradedNavLink.js'
function LearnCourses() {

	return (

		<article id='learnCoursesCard'>
			<img src={learnDemoImage} alt="learnCoursesCardDemo" />
			<LearnCoursesCardDificulty />
			<h3>¿Que es la tecnología bockchain?</h3>
			<p>Aprende todo lo necesario para saber acerca de los nuevos términos en tecnología blockchain y ser un experto en la materia</p>
			<DegradedNavLink route="/learn/1" text="Mas información" backgroundColor="white" />
		</article>

	)
}
export default LearnCourses;