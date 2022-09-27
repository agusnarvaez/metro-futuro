import {useState, useEffect} from 'react'

// Importo componentes
import LearnCourseInfoNav from '../../components/LearnCourse/LearnCourseInfoNav'
import LearnCourseInfoContainer from '../../components/LearnCourse/LearnCourseInfoContainer'
import DegradedNavLink from "../../components/DegradedNavLink";

export default function LearnCourseInfo({item,type,url}) {
	
	const [infoIndex,setInfoIndex]=useState(0)
	
	useEffect(() => {

	},[infoIndex])
	return (

		<section className="learnCoursePage_Info">
			
				{type==="curso"?<LearnCourseInfoNav infoIndex={infoIndex} setInfoIndex={setInfoIndex}/>:""}
				
				<LearnCourseInfoContainer infoIndex={infoIndex} item={item} url={url} type={type}/>

				<DegradedNavLink route={`/${url}`} text={`Más ${type}s`} backgroundColor="white" />

		</section>

	)
}