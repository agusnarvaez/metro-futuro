

export default function LearnCourseCover({item}) {
	
	return (

		<section className="learnCoursePage_Cover">
				<img src={item.cover} alt={item.title} className='learnCourseCover'/>
				<div></div>
		</section>

	)
}