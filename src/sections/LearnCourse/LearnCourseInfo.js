import {useState} from 'react'

//* Importo componentes
import LearnCourseInfoNav from '../../components/LearnCourse/LearnCourseInfoNav'
import LearnCourseInfoContainer from '../../components/LearnCourse/LearnCourseInfoContainer'
import DegradedNavLink from "../../components/DegradedNavLink";

import { selectType,pathSplited } from '../../Functions/learnFunctions';

export default function LearnCourseInfo({item,type}) {
	//* Selecciona el contenido para ver
	const [infoIndex,setInfoIndex]=useState(0)

	return (
		<section className="learnCoursePage_Info">
			{pathSplited==="learn"?<LearnCourseInfoNav infoIndex={infoIndex} setInfoIndex={setInfoIndex}/>:""}

			<LearnCourseInfoContainer infoIndex={infoIndex} item={item} url={pathSplited} type={selectType(pathSplited)}/>

			<DegradedNavLink route={`/${pathSplited}`} text={`Más ${selectType(pathSplited)}s`} backgroundColor="white" />
		</section>
	)
}