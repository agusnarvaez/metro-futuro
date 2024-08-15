//* ### SECCIÓN APRENDE ###
//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react"

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan"
import HelmetData from "../components/HelmetData"

import { pathSplitted } from "../utils/listFunctions.js"

import {getFullList} from "../client/client.js"
import BlogCards from "../sections/Blog/BlogCards.jsx"

export default function Blog({metaData,list,setList,learnArticles,setLearnArticles}) {

	useEffect(()=>{

		getFullList(list,setList,learnArticles,setLearnArticles)
	  },[list,setList,learnArticles,setLearnArticles])

	return (
		<main className='blogPage'>

			<HelmetData metaData={metaData} />

			<LearnSlogan path={pathSplitted()} />

			<BlogCards list={learnArticles} url={pathSplitted()}  />
		</main>
	)
}