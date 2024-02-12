import {useState,useEffect} from 'react'
import LearnCourseInfoVideoCard from "./LearnCourseInfoVideoCard"

export default function LearnCourseInfoVideos({item}){


	const [videos,setVideos]=useState([])

	useEffect(() => {
		if(item!==undefined){
			if(item.youTubeVideosTitles.length===0){
				setVideos(<p>Aún no se encuentran videos disponibles</p>)
			}else{
				setVideos(item.youTubeVideosTitles.map((videoTitle,key)=>{
					return(
						<LearnCourseInfoVideoCard title={videoTitle} description={item.videosDescriptions[key]} link={item.youTubeLinks[key]} key={key} />
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