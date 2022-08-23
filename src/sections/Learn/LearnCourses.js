import React from 'react';
import LearnCoursesCard from './LearnCoursesCard.js'
function LearnCourses(props) {
	const coursesList = props.coursesList
	return (

		<section id='learnCourses'>
			{coursesList.map((course) => {return <LearnCoursesCard key={course.id} course={course} />})}
		</section>

	)
}
export default LearnCourses;