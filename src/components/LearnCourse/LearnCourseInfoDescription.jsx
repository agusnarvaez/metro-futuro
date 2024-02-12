

/* import coursesList from '../../data/coursesList' */
import LearnCourseInfoDescriptionContainer from './LearnCourseInfoDescriptionContainer'

export default function LearnCourseInfoDescription({item}) {

	return (
		<div className="learnCoursePage_InfoDescription">
			<LearnCourseInfoDescriptionContainer item={item}/>
		</div>
	)
}