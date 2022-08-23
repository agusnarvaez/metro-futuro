import React from 'react';
import learnDemoImage from '../../assets/img/learn/learnCoursesCardDemo.jpg'
import LearnCoursesCardDifficulty from './LearnCoursesCardDifficulty.js'
import DegradedNavLink from '../../components/DegradedNavLink.js'
function LearnCourses(props) {
	const course = props.course;
	return (

		<article id='learnCoursesCard'>
			<img src={learnDemoImage} alt="learnCoursesCardDemo" />
			<LearnCoursesCardDifficulty  difficulty={course.difficulty}/>
			<h3>{course.title}</h3>
			<p>{course.description}</p>
			<DegradedNavLink route="/learn/1" text="Mas información" backgroundColor="white" />
		</article>

	)
}
export default LearnCourses;