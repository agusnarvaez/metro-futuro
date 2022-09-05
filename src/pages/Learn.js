//* ### SECCIÓN APRENDE ###



//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
import HelmetData from "../components/HelmetData";

<<<<<<< HEAD

export default function Learn({list}) {
	
=======
export default function Learn({list,metaData}) {
	console.log(list);
>>>>>>> ReactHelmet
	const text = list.title;
	

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />

			<LearnSlogan text={text} />

			<LearnCourses list={list.list} url={list.url} />

		</main>
	)
}