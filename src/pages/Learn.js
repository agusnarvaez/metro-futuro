//* ### SECCIÓN APRENDE ###

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
import HelmetData from "../components/HelmetData";

import { useEffect,useState } from 'react';

import {articles} from '../client/client'

import { pathSplited } from "../Functions/learnFunctions.js";

export default function Learn({metaData,list,setList}) {
	const path = window.location.pathname.slice(1)
	const [fetched,setFetched] = useState(false)
	
	useEffect(()=>{
		if(fetched===false){
			articles.getEntries()
				.then((response)=>response)
				.then((articles)=>{
					setFetched(true)
					setList(articles.items.filter(article=>article.sys.contentType.sys.id===path))
				})
				.catch(error=>console.log(error))
		}
	  },[list])

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />

			<LearnSlogan path={path} />
			
			<LearnCourses list={list} url={path}  />
		</main>
	)
}