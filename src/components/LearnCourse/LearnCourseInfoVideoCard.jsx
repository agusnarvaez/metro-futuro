import { useState } from 'react'
import learnCourseVideoDownArrow from '../../assets/img/icons/learnCourseVideoDownArrow.svg'
import LazyReactPlayer from '../LazyReactPlayer'

export default function LearnCourseInfoVideoCard({title,link, description}){
	const [showVideo,setShowVideo]=useState(false)
	console.log(description)
	return (
		<div className="learnCoursePage_InfoVideoCard" onClick={()=>setShowVideo(!showVideo)}>
			<h2>
				{title}
				<img className={!showVideo?"videoArrow":"videoArrow videoArrow--rotated"}  alt="downArrow" title="downArrow" src={learnCourseVideoDownArrow} loading="lazy"/>
			</h2>

			<div className={showVideo?"learnCoursePage_videoContainer":"learnCoursePage_videoContainer learnCoursePage_videoContainer--wrapped"}>
				<p>{description?description:""}</p>
				<LazyReactPlayer url={link} />
			</div>
		</div>
	)
}