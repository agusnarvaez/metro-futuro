
export default function LearnCourseInfoDescriptionCard({content}) {
	
	return (
		<div className="learnCoursePage_InfoDescriptionCard">
			<h2 className={content.title!==""?"":"hidden"}>{content.title}</h2>
			<p>{content.text}</p>
			{content.image!=="" ? <img src={content.image} alt={content.title} /> : null}
		</div>	
	)
}