export default function LearnCourseCover({item}) {
	return (
		<section className="learnCoursePage_Cover">
				<img src={item.cover.fields.file.url} alt={item.title} title={item.title} className='learnCourseCover'loading="lazy"/>
				<div></div>
		</section>
	)
}