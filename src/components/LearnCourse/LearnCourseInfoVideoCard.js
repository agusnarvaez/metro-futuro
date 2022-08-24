

function LearnCourseInfoVideoCard(props){
	const video = props.video;
	

	return (
		<div className="learnCoursePage_InfoVideoCard">
			{video.title}
		</div>	
	)
}
export default LearnCourseInfoVideoCard;