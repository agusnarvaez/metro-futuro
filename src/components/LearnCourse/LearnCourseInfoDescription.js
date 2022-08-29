

/* import coursesList from '../../data/coursesList'; */
import LearnCourseInfoDescriptionCard from './LearnCourseInfoDescriptionCard';
import LearnCourseInfoDescriptionResume from './LearnCourseInfoDescriptionResume';
import DegradedNavLink from "./../DegradedNavLink";
export default function LearnCourseInfoDescription({content,course}) {
	
	return (
		<div className="learnCoursePage_InfoDescription">
			
			<LearnCourseInfoDescriptionResume course={course} />
			
			{content.map((item,key) => {
				return <LearnCourseInfoDescriptionCard key={key} content={item} />
			})}
			<DegradedNavLink route="/learn/courses" text="Más artículos" backgroundColor="white" />
		</div>	
	)
}