import {useState,useEffect} from 'react'
import LearnCourseInfoVideoCard from "./LearnCourseInfoVideoCard";

export default function LearnCourseInfoVideos({item}){
	
	
	const [videos,setVideos]=useState([])
	
	useEffect(() => {
		if(item!==undefined){
			console.log(item.youTubeVideosTitles)
			if(item.youTubeVideosTitles.length===0){
				setVideos(<p>Aún no se encuentran videos disponibles</p>)
			}else{
				setVideos(item.youTubeVideosTitles.map((videoTitle,key)=>{ 
					return(
						<LearnCourseInfoVideoCard title={videoTitle} link={item.youTubeLinks[key]} />
					)})
				)
			}
		}
		
		
	},[item])

	return (
		<div className="learnCoursePage_InfoVideos">
			{videos}
		</div>	
	)
}