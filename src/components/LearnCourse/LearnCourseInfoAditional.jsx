import {useState,useEffect} from 'react'
import LearnCourseInfoAditionalCard from './LearnCourseInfoAditionalCard'

export default function LearnCourseInfoAditional({item}){
	
	
	const [courseAditionalContent,setCourseAditionalContent]=useState([])
	
	useEffect(() => {
		if(item.aditionalContents.length===0){
			setCourseAditionalContent(<p>Aún no se encuentra contenido adicional</p>)
		}else{
			setCourseAditionalContent(item.aditionalContents.map((content,key)=>{ 
				return(
					<LearnCourseInfoAditionalCard aditionalContent={content} key={key}/>
				)}))
			
		}
		
	},[item.aditionalContents])

	return (
		<div className="learnCoursePage_InfoAditional">
			{courseAditionalContent}
		</div>	
	)
}
