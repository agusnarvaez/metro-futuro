import {useState} from 'react'

//* Importo componentes
import LearnCourseInfoNav from '../../components/LearnCourse/LearnCourseInfoNav'
import LearnCourseInfoContainer from '../../components/LearnCourse/LearnCourseInfoContainer'
import DegradedNavLink from "../../components/DegradedNavLink";

import { selectType } from '../../utils/learnFunctions';

export default function LearnCourseInfo({item,pathSplited}) {
	//* Selecciona el contenido para ver
	const [infoIndex,setInfoIndex]=useState(0)

	/* const isLearnCourse = pathSplited==="aprende" */
	return (
		<section className="learnCoursePage_Info">
			{/* {isLearnCourse&& <LearnCourseInfoNav infoIndex={infoIndex} setInfoIndex={setInfoIndex}/>} */}

			{item && <LearnCourseInfoContainer infoIndex={infoIndex} item={item} url={pathSplited} type={selectType(pathSplited)}/>}

			<DegradedNavLink route={`/${pathSplited}`} text={`Más ${selectType(pathSplited)}s`} backgroundColor="white" />
		</section>
	)
}