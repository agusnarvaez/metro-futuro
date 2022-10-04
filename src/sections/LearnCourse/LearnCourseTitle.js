import { pathSplited,selectTitle } from "../../Functions/learnFunctions"

export default function LearnCourseTitle({item,type}) {
	return (
		<section className="learnCoursePage_Title">
			<h1>{item.title}</h1>
			<p>Un {selectTitle(pathSplited)} de <b>{item.author}</b></p>
		</section>
	)
}