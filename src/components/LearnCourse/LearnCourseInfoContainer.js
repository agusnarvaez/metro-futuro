//* COMPONENTS
import LearnCourseInfoDescription from "./LearnCourseInfoDescription";
import LearnCourseInfoVideos from "./LearnCourseInfoVideos";
import LearnCourseInfoAditional from "./LearnCourseInfoAditional";

export default function LearnCourseInfoContainer({infoIndex,item}) {
	
	//* Obtengo el tipo de artículo desde la ruta
	const path = window.location.pathname.split('/')[1]

	//* Función que define los elementos a mostrar según el tipo de artículo
	const infoContent = (type)=>{ 
		if(type==="blog"){
			return ([<LearnCourseInfoDescription item={item} key={0} />])
		}else{
			return([
				<LearnCourseInfoDescription item={item} key={0}/>,
				<LearnCourseInfoVideos item={item} key={1}/>,
				<LearnCourseInfoAditional item={item} key={2}/>
			])
	}}
	
	return (
		<div className="learnCoursePage_InfoContainer">
			
			{infoContent.length===1?infoContent(path):infoContent(path)[infoIndex]}

		</div>
	)
}