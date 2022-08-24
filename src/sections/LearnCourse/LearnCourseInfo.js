import {useState, useEffect} from 'react'
// Importo componentes
import LearnCourseInfoNav from '../../components/LearnCourse/LearnCourseInfoNav'
import LearnCourseInfoContainer from '../../components/LearnCourse/LearnCourseInfoContainer'


function LearnCourseInfo(props) {
	const course = props.course
	const [infoIndex,setInfoIndex]=useState(0)
	
	useEffect(() => {

/* 		console.log(infoIndex) */

	},[infoIndex])
	return (

		<section className="learnCoursePage_Info">

				<LearnCourseInfoNav infoIndex={infoIndex} setInfoIndex={setInfoIndex}/>
				
				<LearnCourseInfoContainer infoIndex={infoIndex} course={course} />
				
		</section>

	)
}
export default LearnCourseInfo;