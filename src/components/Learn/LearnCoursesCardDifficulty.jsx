
export default function LearnCoursesCardDifficulty({difficulty}) {

	return (

		<div className={`learnCoursesCard_Difficulty learnCoursesCard_Difficulty--${difficulty}`}>
			{difficulty}
		</div>

	)
}
