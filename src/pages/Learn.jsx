//* ### SECCIÓN APRENDE ###
//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect,useState} from "react"

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan"
import LearnCourses from '../sections/Learn/LearnCourses'
import HelmetData from "../components/HelmetData"

import { pathSplitted } from "../utils/listFunctions.js"

import {getFullList} from "../client/client.js"
import LazyReactPlayer from "../components/LazyReactPlayer.jsx"

export default function Learn({metaData,list,setList,learnArticles,setLearnArticles}) {
	const [videoUrl, setVideoUrl] = useState('')
	const hasVideo = videoUrl !== ''
	const clearVideo = () => setVideoUrl('')
	useEffect(()=>{

		getFullList(list,setList,learnArticles,setLearnArticles)
	  },[list,setList,learnArticles,setLearnArticles])

	return (
		<main className='learnPage'>
			<HelmetData metaData={metaData} />
			<div className={`video-modal ${hasVideo? 'video-modal_show':''}`}>
				<i onClick={clearVideo} className="fa fa-x"></i>
				<LazyReactPlayer url={videoUrl} borderRadius='10px' />
			</div>

			<LearnSlogan path={pathSplitted()} />

			<LearnCourses list={learnArticles} url={pathSplitted()} setVideoUrl={setVideoUrl} />
		</main>
	)
}