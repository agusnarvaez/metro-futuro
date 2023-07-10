//* Función de Contentful para mostrar el RICH-TEXT de la API
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
//* Función modulada para mostrar los tipos de texto correctamente
import {RICHTEXT_OPTIONS} from "../../utils/textFunctions"

export default function LearnCourseInfoDescriptionCard({item}) {
	console.log(item.content)
	return (
		<div className="learnCoursePage_InfoDescriptionContainer">
			{documentToReactComponents(item.content,RICHTEXT_OPTIONS)}
		</div>
	)
}