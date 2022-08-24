

function LearnCourseTitle(props) {
	const course = props.course
	return (

		<section className="learnCoursePage_Title">
				<h1>{course.title}</h1>
				<p>Un curso de <b>{course.author}</b></p>
		</section>

	)
}
export default LearnCourseTitle;