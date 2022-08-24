import React from 'react';
import learnDemoImage from '../../assets/img/learn/learnCoursesCardDemo.jpg'
import LearnCourseInfoAditionalType from './LearnCourseInfoAditionalType'
import DegradedLink from '../DegradedLink.js'
function LearnCourseInfoAditionalCard(props) {
	const aditional = props.aditionalContent;
	return (

		<article id='learnCoursesCard'>
			<img src={learnDemoImage} alt="learnCoursesCardDemo" />
			<LearnCourseInfoAditionalType  type={aditional.type}/>
			<h3>{aditional.title}</h3>
			<p>{aditional.description}</p>
			<DegradedLink route={aditional.url} text="Visualizar" backgroundColor="white" />
		</article>

	)
}
export default LearnCourseInfoAditionalCard;