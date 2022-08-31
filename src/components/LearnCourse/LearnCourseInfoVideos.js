import {useState,useEffect} from 'react'
import LearnCourseInfoVideoCard from "./LearnCourseInfoVideoCard";

export default function LearnCourseInfoVideos({item}){
	
	
	const [videos,setVideos]=useState([])
	
	useEffect(() => {
		if(item.videos.length===0){
			setVideos(<p>Aún no se encuentran videos disponibles</p>)
		}else{
			setVideos(item.videos.map((video)=>{ 
				return(
					<LearnCourseInfoVideoCard video={video}/>
				)})
			)
		}
		
	},[item.videos])

	return (
		<div className="learnCoursePage_InfoVideos">
			{videos}
		</div>	
	)
}