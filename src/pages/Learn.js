//* ### SECCIÓN APRENDE ###
//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react";

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
import HelmetData from "../components/HelmetData";


import {reqApi,filterItems} from "../services/getArticles";
//import { pathSplited } from "../Functions/learnFunctions.js";

export default function Learn({metaData,list,setList,learnArticles,setLearnArticles}) {
	const path = window.location.pathname.split('/')[1]
	
	
	useEffect(()=>{
		reqApi(list,setList)
        if(learnArticles.length===0){
            filterItems(list,setLearnArticles)
        }
	  },[list,setList,path,learnArticles,setLearnArticles])

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />

			<LearnSlogan path={path} />

			<LearnCourses list={learnArticles} url={path}  />
		</main>
	)
}