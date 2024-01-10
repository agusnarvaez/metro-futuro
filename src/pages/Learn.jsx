//* ### SECCIÓN APRENDE ###
//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react"

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan"
import LearnCourses from '../sections/Learn/LearnCourses'
import HelmetData from "../components/HelmetData"

import { pathSplitted } from "../utils/listFunctions.js"

import {getFullList} from "../client/client.js"

export default function Learn({metaData,list,setList,learnArticles,setLearnArticles}) {


	useEffect(()=>{
		getFullList(list,setList,learnArticles,setLearnArticles)
	  },[list,setList,learnArticles,setLearnArticles])

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />

			<LearnSlogan path={pathSplitted()} />

			<LearnCourses list={learnArticles} url={pathSplitted()}  />
		</main>
	)
}