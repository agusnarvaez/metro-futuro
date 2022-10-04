export default function LearnCourseCover({item}) {
	return (
		<section className="learnCoursePage_Cover">
				<img src={item.cover.fields.file.url} alt={item.title} className='learnCourseCover'/>
				<div></div>
		</section>
	)
}