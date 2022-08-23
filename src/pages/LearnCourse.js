import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "../assets/css/learnCourse.css";
/* import learnDemoImage from '../assets/img/learn/learnCoursesCardDemo.jpg' */
function LearnCourse(props) {
	const params = useParams();
    const coursesList= props.coursesList;
    const course = coursesList[params.id-1];
	
	
	useEffect(() => {
        console.log(course.cover);
    }, [params]);
	return (
		<main className='learnCoursePage'>
			<section className="learnCoursePage_Cover">
				<img src={course.cover} alt={course.title} className='learnCourseCover'/>
				<div></div>
			</section>
			<section className="learnCoursePage_Title">
				<h1>{course.title}</h1>
				<p>Un curso de <b>{course.author}</b></p>
			</section>
		</main>
	)
}
export default LearnCourse;