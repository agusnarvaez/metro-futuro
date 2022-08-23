import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "../assets/css/learnCourse.css";

function LearnCourse(props) {
	const params = useParams();
    const coursesList= props.coursesList;
    const course = coursesList[params.id-1];
	
	
	useEffect(() => {
        console.log(course);
    }, [params]);
	return (
		<main className='learnCoursePage'>
			
		
		</main>
	)
}
export default LearnCourse;