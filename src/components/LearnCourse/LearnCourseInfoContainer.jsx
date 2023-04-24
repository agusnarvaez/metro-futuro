//* COMPONENTS
import LearnCourseInfoDescription from "./LearnCourseInfoDescription";
import LearnCourseInfoVideos from "./LearnCourseInfoVideos";
/* import LearnCourseInfoAditional from "./LearnCourseInfoAditional"; */

import {useEffect,useState} from 'react'

export default function LearnCourseInfoContainer({infoIndex,item}) {
	
	//* Obtengo el tipo de artículo desde la ruta
	const path = window.location.pathname.split('/')[1]

	const [info,setInfo] = useState([])
	//* Función que define los elementos a mostrar según el tipo de artículo
	const infoContent = (type)=>{ 
		if(type==="blog"){
			return ([<LearnCourseInfoDescription item={item} key={0} />])
		}else{
			return([
				<LearnCourseInfoDescription item={item} key={0}/>,
				<LearnCourseInfoVideos item={item} key={1}/>/* ,
				<LearnCourseInfoAditional item={item} key={2}/> */
			])
	}}

	useEffect(() => {
		if(info.length===0){
			setInfo(infoContent(path))
		}
	},[item,infoIndex,setInfo,info,path,infoContent])
	
	return (
		<div className="learnCoursePage_InfoContainer">
			
			{info.length===1?info:info[infoIndex]}

		</div>
	)
}