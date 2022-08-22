import React from 'react';

function LearnCoursesCardDificulty(props) {

	return (

		<div className={`learnCoursesCard_Difficulty learnCoursesCard_Difficulty--${props.difficulty}`}>
			{props.difficulty}
		</div>

	)
}
export default LearnCoursesCardDificulty;