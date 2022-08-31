

export default function LearnCourseTitle({item,type}) {
	
	return (

		<section className="learnCoursePage_Title">
				<h1>{item.title}</h1>
				<p>Un {type} de <b>{item.author}</b></p>
		</section>

	)
}