//* ### SECCIÓN APRENDE ###
//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect,useState} from "react"

import Cookies from "js-cookie"

//* COMPONENTS
import LearnSlogan from"../sections/Learn/LearnSlogan"
import LearnCourses from '../sections/Learn/LearnCourses'
import LearnPopUp from "../sections/Learn/LearnPopUp"
import HelmetData from "../components/HelmetData"

import { pathSplitted } from "../utils/listFunctions.js"

import {getFullList} from "../client/client.js"

export default function Learn({metaData,list,setList,learnArticles,setLearnArticles}) {
	const [showPopUp, setShowPopUp] = useState(true)

	useEffect(()=>{
		const isRegistered = Cookies.get('isRegistered');
		if (isRegistered) {
			setShowPopUp(false) // Si la cookie existe, no mostrar el PopUp
		}
		getFullList(list,setList,learnArticles,setLearnArticles)
	  },[list,setList,learnArticles,setLearnArticles])

	return (
		<main className='learnPage'>

			<HelmetData metaData={metaData} />

			{showPopUp && <LearnPopUp setShowPopUp={setShowPopUp} />}

			<LearnSlogan path={pathSplitted()} />

			<LearnCourses list={learnArticles} url={pathSplitted()}  />
		</main>
	)
}