import React from 'react';
import "../assets/css/learn.css"
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
function Learn(props) {
	const coursesList = props.coursesList;
	return (
		<main className='learnPage'>

			<LearnSlogan />

			<LearnCourses coursesList={coursesList} />
		</main>
	)
}
export default Learn;