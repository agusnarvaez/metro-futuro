import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import "../assets/css/learnCourse.css";

// Importo secciones
import LearnCourseCover from "../sections/LearnCourse/LearnCourseCover";
import LearnCourseTitle from "../sections/LearnCourse/LearnCourseTitle";
import LearnCourseInfo from "../sections/LearnCourse/LearnCourseInfo";
function LearnCourse(props) {
	const params = useParams();
    const coursesList= props.coursesList;
    const course = coursesList[params.id-1];
	
	
	useEffect(() => {
    }, [params]);
	return (
		<main className='learnCoursePage'>
			<LearnCourseCover course={course}/>
			
			<LearnCourseTitle course={course}/>
			
			<LearnCourseInfo course={course}/>
		</main>
	)
}
export default LearnCourse;