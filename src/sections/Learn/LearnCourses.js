import React from 'react';
import LearnCoursesCard from './LearnCoursesCard.js'
function LearnCourses() {
	const courses = [
	{
		id: 1,
		title: '¿Cómo registrarme en Metro Futuro?',
		description: 'Aprende como ingresar a la plataforma y registrarte para comenzar a invertir.',
		difficulty: 'Básico'
	},
	{
		id: 2,
		title: '¿Que es la tecnología bockchain?',
		description: 'Aprende todo lo necesario para saber acerca de los nuevos términos en tecnología blockchain y ser un experto en la materia',
		difficulty: 'Básico'
	},
	{
		id: 3,
		title: '¿Que es la tecnología bockchain?',
		description: 'Aprende todo lo necesario para saber acerca de los nuevos términos en tecnología blockchain y ser un experto en la materia',
		difficulty: 'Avanzado'
	}

];
	return (

		<section id='learnCourses'>
			{courses.map((course) => {return <LearnCoursesCard key={course.id} course={course} />})}
			{/* <LearnCoursesCard/>
			<LearnCoursesCard/>
			<LearnCoursesCard/>
			<LearnCoursesCard/>
			<LearnCoursesCard/> */}
		</section>

	)
}
export default LearnCourses;