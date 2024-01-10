//* Importo Hooks
import {useEffect,useState} from "react"


import {useParams,useNavigate } from "react-router-dom"

//* API de contentful
import {handleListItems} from "../utils/listFunctions"
//* SECTIONS
import LearnCourseCover from "../sections/LearnCourse/LearnCourseCover"
import LearnCourseTitle from "../sections/LearnCourse/LearnCourseTitle"
import LearnCourseInfo from "../sections/LearnCourse/LearnCourseInfo"
import HelmetData from "../components/HelmetData"

export default function LearnCourse({list,setList,metaData,learnArticles,setLearnArticles}) {
	//* Capturo los parámetros de la URL
	const pathSplited = window.location.pathname.split('/')[1]
	const params = useParams()
	const itemID = params.id
	let navigate = useNavigate()
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

		handleListItems(list,setList,learnArticles,setLearnArticles,itemID,item,setItem,newMetaData,setNewMetaData,navigate)

    }, [list,params.id,pathSplited,setList,newMetaData,setNewMetaData,metaData,learnArticles,setLearnArticles,item,navigate,itemID])

	return (
		<main className='learnCoursePage'>

			<HelmetData metaData={newMetaData} />

			{courseItems().map((item,key)=>item)}

		</main>
	)
}
