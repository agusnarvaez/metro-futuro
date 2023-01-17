import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";

import {reqApi,filterItems} from "../services/getArticles";
//* SECTIONS 
import LearnCourseCover from "../sections/LearnCourse/LearnCourseCover";
import LearnCourseTitle from "../sections/LearnCourse/LearnCourseTitle";
import LearnCourseInfo from "../sections/LearnCourse/LearnCourseInfo";
import HelmetData from "../components/HelmetData";

export default function LearnCourse({list,setList,metaData,learnArticles,setLearnArticles}) {
	//* Capturo los parámetros de la URL
	const pathSplited = window.location.pathname.split('/')[1]
	const params = useParams();

	//* Selecciono el ítem según la URL
	const [item,setItem] = useState()
	const [newMetaData,setNewMetaData] = useState(metaData)
	const courseItems = ()=>{
		if(item!==undefined){
			return ([
				<LearnCourseCover item={item} key={0}/>,
				<LearnCourseTitle item={item} type={learnArticles.type} pathSplited={pathSplited} key={1}/>,
				<LearnCourseInfo item={item} type={learnArticles.type} pathSplited={pathSplited} key={2}/>
			])
		}else{
			return([])
		}
	}
	useEffect(() => {
		reqApi(list,setList)
        if(learnArticles.length===0){
            filterItems(list,setLearnArticles)
        }else if(item===undefined){
			setItem(learnArticles[params.id].fields)
		}
		if(item!==undefined&&newMetaData.title===""){
			setNewMetaData({
				...newMetaData,
				title: item.title,
				description:item.description,
			})
			console.log(newMetaData)
		}
		
    }, [list,params.id,pathSplited,setList,newMetaData,setNewMetaData,metaData,learnArticles,setLearnArticles,item]);

	return (
		<main className='learnCoursePage'>

			<HelmetData metaData={newMetaData} />
			
			{courseItems().map((item,key)=>item)}

		</main>
	)
}
