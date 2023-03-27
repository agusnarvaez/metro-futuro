import {useState} from "react"
import learnCourseVideoDownArrow from '../../assets/img/icons/learnCourseVideoDownArrow.svg';

import ReactPlayer from "react-player";
export default function LearnCourseInfoVideoCard({title,link}){
	const [showVideo,setShowVideo]=useState(false)
	return (
		<div className="learnCoursePage_InfoVideoCard">
			<h2>
				{title}
				<img className={!showVideo?"videoArrow":"videoArrow videoArrow--rotated"} onClick={()=>setShowVideo(!showVideo)} alt="downArrow" title="downArrow" src={learnCourseVideoDownArrow} loading="lazy"/>
			</h2>

			<div className={showVideo?"learnCoursePage_videoContainer":"learnCoursePage_videoContainer learnCoursePage_videoContainer--wrapped"}>
			<ReactPlayer
                        className="courseYouTubeVideo_Player"
                        url={link}
                        controls
                        width="100%"
                        /* height="500px" */
                        border="none"  
						/* padding="3%" */
                    />
			</div>
		</div>	
	)
}