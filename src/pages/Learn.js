//* ### SECCIÓN APRENDE ###
//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react";

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
import HelmetData from "../components/HelmetData"


import {reqApi} from "../client/client"
import { pathSplitted, filterItems } from "../utils/listFunctions"

export default function Learn({metaData,list,setList,learnArticles,setLearnArticles}) {
	
	
	useEffect(()=>{
		reqApi(list,setList)
        if(learnArticles.length===0){
            filterItems(list,setLearnArticles)
        }
	  },[list,setList,learnArticles,setLearnArticles])

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />

			<LearnSlogan path={pathSplitted()} />

			<LearnCourses list={learnArticles} url={pathSplitted()}  />
		</main>
	)
}