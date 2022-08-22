import React from 'react';
import "../assets/css/learn.css"
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
function Learn() {

	return (
		<main className='learnPage'>

			<LearnSlogan />

			<LearnCourses />
		</main>
	)
}
export default Learn;