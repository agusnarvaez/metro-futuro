import {useEffect} from "react";
import {useParams} from "react-router-dom";


// SECTIONS 
import LearnCourseCover from "../sections/LearnCourse/LearnCourseCover";
import LearnCourseTitle from "../sections/LearnCourse/LearnCourseTitle";
import LearnCourseInfo from "../sections/LearnCourse/LearnCourseInfo";
import HelmetData from "../components/HelmetData";

export default function LearnCourse({list,metaData}) {
	// Capturo los parámetros de la URL
	const params = useParams();

	// Selecciono el ítem según la URL
    const item = list.list[params.id];
	
	
	useEffect(() => {
		console.log(list);
    }, [params]);

	return (
		<main className='learnCoursePage'>
			<HelmetData metaData={metaData} />
			
			<LearnCourseCover item={item}/>
			
			<LearnCourseTitle item={item} type={list.type}/>
			
			<LearnCourseInfo item={item} type={list.type} url={list.url}/>
		</main>
	)
}
