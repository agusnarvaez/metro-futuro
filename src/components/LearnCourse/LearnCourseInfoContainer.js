//* COMPONENTS
import LearnCourseInfoDescription from "./LearnCourseInfoDescription";
import LearnCourseInfoVideos from "./LearnCourseInfoVideos";
import LearnCourseInfoAditional from "./LearnCourseInfoAditional";



export default function LearnCourseInfoContainer({infoIndex,item}) {
	
	const infoContent = [
			<LearnCourseInfoDescription content={item.content} item={item} />,
			<LearnCourseInfoVideos item={item}/>,
			<LearnCourseInfoAditional item={item}/>
		]

	return (
		<div className="learnCoursePage_InfoContainer">

			{infoContent[infoIndex]}


		</div>
	)
}