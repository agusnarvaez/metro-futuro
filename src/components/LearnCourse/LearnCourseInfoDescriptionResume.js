import Clock from "../../assets/img/icons/learnClock.png";

import LearnCoursesCardDifficulty from "../Learn/LearnCoursesCardDifficulty";

export default function LearnCourseInfoDescriptionResume({item}) {
	
	return (
		<div className="learnCoursePage_InfoDescriptionResume">
			<LearnCoursesCardDifficulty difficulty={item.difficulty} />
			<p>Publicación: {item.published}, Actualización: {item.updated}</p>
			<img src={Clock} alt="learnClock"/><p>{item.lectureTime}</p>
		</div>	
	)
}