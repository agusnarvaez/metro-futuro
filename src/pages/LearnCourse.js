import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

import {articles} from '../client/client'
//* SECTIONS 
import LearnCourseCover from "../sections/LearnCourse/LearnCourseCover";
import LearnCourseTitle from "../sections/LearnCourse/LearnCourseTitle";
import LearnCourseInfo from "../sections/LearnCourse/LearnCourseInfo";
import HelmetData from "../components/HelmetData";

export default function LearnCourse({list,setList,metaData}) {
	//* Capturo los parámetros de la URL
	const pathSplited = window.location.pathname.split('/')[1]
	const params = useParams();

	//* Selecciono el ítem según la URL
	const [item,setItem] = useState()

	const courseItems = ()=>{
		if(item!==undefined){
			return ([
				<LearnCourseCover item={item} key={0}/>,
				<LearnCourseTitle item={item} type={list.type} pathSplited={pathSplited} key={1}/>,
				<LearnCourseInfo item={item} type={list.type} pathSplited={pathSplited} key={2}/>
			])
		}else{
			return([])
		}
	}
	useEffect(() => {
		//* Chequeo si ya se solicitó el ítem
		if(list.length===0){
			articles.getEntries()
				.then((response)=>{
					return response.items.filter(article=>pathSplited.indexOf(article.sys.contentType.sys.id)>=0)
				})
				.then(newList =>{
					setList(newList)
					return newList[params.id].fields
				})
				.then((newItem)=>{
					setItem(newItem)
				})
				.catch(error=>console.log(error))
		}else{
			setItem(list[params.id].fields)
		}
		
    }, [list,params.id,pathSplited,setList]);

	return (
		<main className='learnCoursePage'>

			<HelmetData metaData={metaData} />
			
			{courseItems().map((item,key)=>item)}

		</main>
	)
}
