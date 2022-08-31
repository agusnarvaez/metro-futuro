
/* import learnDemoImage from '../../assets/img/learn/learnCoursesCardDemo.jpg' */
import LearnCoursesCardDifficulty from './LearnCoursesCardDifficulty.js'
import DegradedNavLink from '../../components/DegradedNavLink.js'

export default function LearnCourses({item,url}) {
	
	return (

		<article id='learnCoursesCard'>

			<img src={item.cover} alt="learnCoursesCardDemo" />

			<LearnCoursesCardDifficulty  difficulty={item.difficulty}/>

			<h3>{item.title}</h3>

			<p>{item.shortDescription}</p>

			<DegradedNavLink route={`/learn/${url+item.id}`} text="Mas información" backgroundColor="white" />

		</article>

	)
}