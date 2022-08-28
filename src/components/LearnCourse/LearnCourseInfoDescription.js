

/* import coursesList from '../../data/coursesList'; */
import LearnCourseInfoDescriptionCard from './LearnCourseInfoDescriptionCard';
import LearnCourseInfoDescriptionResume from './LearnCourseInfoDescriptionResume';

export default function LearnCourseInfoDescription({content,course}) {
	
	return (
		<div className="learnCoursePage_InfoDescription">
			<h1>{course.title}</h1>
			
			<LearnCourseInfoDescriptionResume course={course} />
			
			{content.map((item,key) => {
				return <LearnCourseInfoDescriptionCard key={key} content={item} />
			})}
		</div>	
	)
}