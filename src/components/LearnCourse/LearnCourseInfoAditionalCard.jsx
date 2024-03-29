


//* Components
import LearnCourseInfoAditionalType from './LearnCourseInfoAditionalType'
import DegradedLink from '../DegradedLink'

export default function LearnCourseInfoAditionalCard({aditional}) {
	
	return (

		<article id='learnCoursesCard'>
			{/* <img src={learnDemoImage} alt="learnCoursesCard"  title="learnCoursesCard" loading="lazy"/> */}
			<LearnCourseInfoAditionalType  type={aditional.type}/>
			<h3>{aditional.title}</h3>
			<p>{aditional.description}</p>
			<DegradedLink route={aditional.url} text="Visualizar" backgroundColor="white" />
		</article>

	)
}
