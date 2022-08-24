import {useState,useEffect} from 'react'
import LearnCourseInfoAditionalCard from './LearnCourseInfoAditionalCard'

function LearnCourseInfoAditional(props){
	const course = props.course;
	
	const [courseAditionalContent,setCourseAditionalContent]=useState([])
	
	useEffect(() => {
		if(course.aditionalContents.length===0){
			setCourseAditionalContent(<p>Aún no se encuentra contenido adicional</p>)
		}else{
			setCourseAditionalContent(course.aditionalContents.map((content,key)=>{ 
				return(
					<LearnCourseInfoAditionalCard aditionalContent={content} key={key}/>
				)}))
			
		}
		
	},[course.aditionalContents])

	return (
		<div className="learnCoursePage_InfoAditional">
			{courseAditionalContent}
		</div>	
	)
}
export default LearnCourseInfoAditional;