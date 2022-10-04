

/* import coursesList from '../../data/coursesList'; */
import LearnCourseInfoDescriptionContainer from './LearnCourseInfoDescriptionContainer';
import LearnCourseInfoDescriptionResume from './LearnCourseInfoDescriptionResume';

export default function LearnCourseInfoDescription({item}) {

	return (
		<div className="learnCoursePage_InfoDescription">
			
			<LearnCourseInfoDescriptionResume item={item} />

			<LearnCourseInfoDescriptionContainer item={item}/>
			
		</div>	
	)
}