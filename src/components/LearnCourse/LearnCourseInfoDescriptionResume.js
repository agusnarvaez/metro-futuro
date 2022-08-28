import Clock from "../../assets/img/icons/learnClock.png";


import LearnCoursesCardDifficulty from "../Learn/LearnCoursesCardDifficulty";

export default function LearnCourseInfoDescriptionResume({course}) {
	
	return (
		<div className="learnCoursePage_InfoDescriptionResume">
			<LearnCoursesCardDifficulty difficulty={course.difficulty} />
			<p>Publicación: {course.published}, Actualización: {course.updated}</p>
			<img src={Clock} alt="learnClock"/><p>{course.lectureTime}</p>
		</div>	
	)
}