// COMPONENTS
import LearnCourseInfoDescription from "./LearnCourseInfoDescription";
import LearnCourseInfoVideos from "./LearnCourseInfoVideos";
import LearnCourseInfoAditional from "./LearnCourseInfoAditional";

export default function LearnCourseInfoContainer({infoIndex,course}) {
	
	const infoContent = [
			<LearnCourseInfoDescription content={course.content} course={course}/>,
			<LearnCourseInfoVideos course={course}/>,
			<LearnCourseInfoAditional course={course}/>
		]

	return (
		<div className="learnCoursePage_InfoContainer">
			{infoContent[infoIndex]}
		</div>
	)
}