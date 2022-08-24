
function LearnCourseInfoDescription(props) {
	const course = props.course;
	
	console.log(course)
	return (
		<div className="learnCoursePage_InfoDescription">
			{course.description}
		</div>	
	)
}
export default LearnCourseInfoDescription;