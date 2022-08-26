import {useEffect} from "react";
import {useParams} from "react-router-dom";


// SECTIONS 
import LearnCourseCover from "../sections/LearnCourse/LearnCourseCover";
import LearnCourseTitle from "../sections/LearnCourse/LearnCourseTitle";
import LearnCourseInfo from "../sections/LearnCourse/LearnCourseInfo";


export default function LearnCourse(props) {

	const params = useParams();

    const coursesList= props.coursesList;

    const course = coursesList[params.id];
	
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
