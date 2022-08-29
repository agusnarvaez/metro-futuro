import React from 'react';
import learnDemoImage from '../../assets/img/learn/learnCoursesCardDemo.jpg'
import LearnCoursesCardDifficulty from './LearnCoursesCardDifficulty.js'
import DegradedNavLink from '../../components/DegradedNavLink.js'

function LearnCourses(props) {
	const course = props.course;
	console.log(props.key)
	return (

		<article id='learnCoursesCard'>
			<img src={learnDemoImage} alt="learnCoursesCardDemo" />
			<LearnCoursesCardDifficulty  difficulty={course.difficulty}/>
			<h3>{course.title}</h3>
			<p>{course.shortDescription}</p>
			<DegradedNavLink route={`/learn/${course.id}`} text="Mas información" backgroundColor="white" />
		</article>

	)
}
export default LearnCourses;