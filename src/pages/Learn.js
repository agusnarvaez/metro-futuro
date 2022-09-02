//* ### SECCIÓN APRENDE ###



//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'


export default function Learn({list}) {
	
	const text = list.title;
	

	return (
		<main className='learnPage'>

			<LearnSlogan text={text} />

			<LearnCourses list={list.list} url={list.url} />

		</main>
	)
}