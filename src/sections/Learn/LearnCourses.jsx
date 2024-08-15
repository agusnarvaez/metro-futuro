
import LearnCoursesCard from '../../components/Learn/LearnCoursesCard'

function LearnCourses({list,url,setVideoUrl}) {
	return (
		<section id='learnCourses'>
			{list.map((item,key) => {
				return <LearnCoursesCard key={key} id={key} item={item.fields} url={url} setVideoUrl={setVideoUrl}/>})}
		</section>
	)
}
export default LearnCourses;