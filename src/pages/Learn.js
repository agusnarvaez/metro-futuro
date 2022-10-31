//* ### SECCIÓN APRENDE ###

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan.js"
import LearnCourses from '../sections/Learn/LearnCourses.js'
import HelmetData from "../components/HelmetData";

import { useEffect } from 'react';

import {articles} from '../client/client'
import {reqApi,filterItems} from "../services/getArticles";
//import { pathSplited } from "../Functions/learnFunctions.js";

export default function Learn({metaData,list,setList,learnArticles,setLearnArticles}) {
	//const path = window.location.pathname.slice(1,-1)
	const path = window.location.pathname.split('/')[1]
	//const [fetched,setFetched] = useState(false)
	
	useEffect(()=>{
		//* Si el array está vacío, no realiza la petición
		/* if(list.length===0){
			articles.getEntries()
				.then((articles)=>{
					return articles.items.filter(article=>article.sys.contentType.sys.id===path)
				})
				.then(newList=>{
					setList(newList)
					return newList
				})
				.catch((error)=>{
					console.log(error)
					window.location = '/404NotFound';
					})
					
		}else{
			setList(list)
		} */

		reqApi(list,setList)
        console.log(learnArticles)
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