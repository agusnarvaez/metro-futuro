// ### SECCIÓN APRENDE ###

// COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'


export default function Learn(props) {
	const coursesList = props.coursesList;
	return (
		<main className='learnPage'>

			<LearnSlogan />

			<LearnCourses coursesList={coursesList} />
		</main>
	)
}