import Clock from "../../assets/img/icons/homeClock.svg";

import LearnCoursesCardDifficulty from "../Learn/LearnCoursesCardDifficulty";

export default function LearnCourseInfoDescriptionResume({item}) {
	
	return (
		<div className="learnCoursePage_InfoDescriptionResume">
			
			{item.difficulty!==undefined?<LearnCoursesCardDifficulty difficulty={item.difficulty} />:""}

			<p>Publicación: {item.published.slice(0,10)},<br/> Actualización: {item.updated.slice(0,10)}</p>
			
			<div className="learnCoursePage_InfoDescriptionLectureTime">
				<img src={Clock} alt="learnClock" title="learnClock"/><p>{item.lectureTime}m</p>
			</div>
		</div>	
	)
}