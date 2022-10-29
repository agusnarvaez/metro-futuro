//* Función de Contentful para mostrar el RICH-TEXT de la API
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"/* import { selectMarks,addHyperlink } from '../../Functions/textFunctions'; */
//* Función modulada para mostrar los tipos de texto correctamente
import {RICHTEXT_OPTIONS} from "../../Functions/textFunctions"

export default function LearnCourseInfoDescriptionCard({item}) {

	return (
		<div className="learnCoursePage_InfoDescriptionContainer">
			{documentToReactComponents(item.content,RICHTEXT_OPTIONS)}
		</div>	
	)
}