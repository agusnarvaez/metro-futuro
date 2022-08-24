
import LearnCourseInfoDescription from "./LearnCourseInfoDescription";
import LearnCourseInfoVideos from "./LearnCourseInfoVideos";
import LearnCourseInfoAditional from "./LearnCourseInfoAditional";
function LearnCourseInfoContainer(props) {
	const course = props.course;
	const infoContent = [
			<LearnCourseInfoDescription course={course}/>,
			<LearnCourseInfoVideos course={course}/>,
			<LearnCourseInfoAditional course={course}/>
		]

	return (
		<div className="learnCoursePage_InfoContainer">
			{infoContent[props.infoIndex]}
		</div>
	)
}
export default LearnCourseInfoContainer;