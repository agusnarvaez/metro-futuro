

/* import coursesList from '../../data/coursesList'; */
import LearnCourseInfoDescriptionCard from './LearnCourseInfoDescriptionCard';
import LearnCourseInfoDescriptionResume from './LearnCourseInfoDescriptionResume';
import DegradedNavLink from "./../DegradedNavLink";

export default function LearnCourseInfoDescription({content,item,url,type}) {
	
	return (
		<div className="learnCoursePage_InfoDescription">
			
			<LearnCourseInfoDescriptionResume item={item} />
			
			{content.map((item,key) => {
				return <LearnCourseInfoDescriptionCard key={key} content={item} />
			})}
			<DegradedNavLink route={`/learn/${url}`} text={`Más ${type}s`} backgroundColor="white" />
		</div>	
	)
}