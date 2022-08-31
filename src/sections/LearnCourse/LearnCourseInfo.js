import {useState, useEffect} from 'react'

// Importo componentes
import LearnCourseInfoNav from '../../components/LearnCourse/LearnCourseInfoNav'
import LearnCourseInfoContainer from '../../components/LearnCourse/LearnCourseInfoContainer'


export default function LearnCourseInfo({item,type,url}) {
	
	const [infoIndex,setInfoIndex]=useState(0)
	
	useEffect(() => {

	},[infoIndex])
	return (

		<section className="learnCoursePage_Info">
				{type==="curso"?<LearnCourseInfoNav infoIndex={infoIndex} setInfoIndex={setInfoIndex}/>:""}
				
				<LearnCourseInfoContainer infoIndex={infoIndex} item={item} url={url} type={type}/>
				
		</section>

	)
}