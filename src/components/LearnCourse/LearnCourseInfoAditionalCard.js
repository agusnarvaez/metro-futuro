
import learnDemoImage from '../../assets/img/learn/learnCoursesCardDemo.jpg'

//* Components
import LearnCourseInfoAditionalType from './LearnCourseInfoAditionalType'
import DegradedLink from '../DegradedLink.js'

export default function LearnCourseInfoAditionalCard({aditional}) {
	
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
