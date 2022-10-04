
import LearnCoursesCard from '../../components/Learn/LearnCoursesCard'

function LearnCourses({list,url}) {

	return (

		<section id='learnCourses'>
			{list.map((item,key) => {
				return <LearnCoursesCard key={key} id={key} item={item.fields} url={url}/>})}
		</section>

	)
}
export default LearnCourses;