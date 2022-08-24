import {useState,useEffect} from 'react'
import LearnCourseInfoVideoCard from "./LearnCourseInfoVideoCard";
function LearnCourseInfoVideos(props){
	const course = props.course;
	
	const [courseVideos,setCourseVideos]=useState([])
	
	useEffect(() => {
		if(course.videos.length===0){
			setCourseVideos(<p>Aún no se encuentran videos disponibles</p>)
		}else{
			setCourseVideos(course.videos.map((video)=>{ 
				return(
					<LearnCourseInfoVideoCard video={video}/>
				)})
			)
		}
		
	},[course.videos])

	return (
		<div className="learnCoursePage_InfoVideos">
			{courseVideos}
		</div>	
	)
}
export default LearnCourseInfoVideos;