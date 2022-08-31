import React from 'react';
import LearnCoursesCard from '../../components/Learn/LearnCoursesCard'
function LearnCourses({list,url}) {

	
	return (

		<section id='learnCourses'>
			{list.map((item,key) => {return <LearnCoursesCard key={key} item={item} url={url}/>})}
		</section>

	)
}
export default LearnCourses;