
import DegradedNavLink from '../DegradedNavLink'

export default function LearnCourses({item,url,id}) {
	return (

		<article id='learnCoursesCard'>

			<img src={item.cover.fields?.file.url} alt="learnCoursesCard" title='learnCoursesCard' loading="lazy"/>

			{/* <LearnCoursesCardDifficulty  difficulty={item.difficulty}/> */}

			<h3>{item.title}</h3>

			<p>{item.description}</p>

			<DegradedNavLink route={`/${url+"/"+item.url}`} text="Mas información" backgroundColor="white" />

		</article>

	)
}