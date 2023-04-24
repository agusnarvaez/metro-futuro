export default function LearnCoursesCardDificulty(props) {

	return (

		<div className={`learnCoursesCard_Type learnCoursesCard_Type--${props.type}`}>
			{props.type}
		</div>

	)
}