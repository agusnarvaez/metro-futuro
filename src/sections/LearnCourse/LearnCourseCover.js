

function LearnCourseCover(props) {
	const course = props.course
	return (

		<section className="learnCoursePage_Cover">
				<img src={course.cover} alt={course.title} className='learnCourseCover'/>
				<div></div>
		</section>

	)
}
export default LearnCourseCover;