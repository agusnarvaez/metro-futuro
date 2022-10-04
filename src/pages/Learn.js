//* ### SECCIÓN APRENDE ###

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
import HelmetData from "../components/HelmetData";

import { useEffect } from 'react';

import {articles} from '../client/client'

import { path } from "../Functions/learnFunctions.js";

export default function Learn({metaData,list,setList}) {
	
	useEffect(()=>{
		articles.getEntries()
		.then((articles)=>{
			const newList = articles.items.filter(article=>article.sys.contentType.sys.id===path)
			setList(newList)
		})
		.catch(error=>console.log(error))
	  },[])

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />

			<LearnSlogan path={path} />

			<LearnCourses list={list} url={path}  />
		</main>
	)
}