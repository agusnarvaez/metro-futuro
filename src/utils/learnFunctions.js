//* Obtiene la url para saber los tipos de cursos

const selectTitle = (param) => {
	switch(param){
		case "blog":
			return "artículo";
		case "aprende":
			return "curso";
		case "":
			return "curso";
		default:
			return "curso"
	}
}

//* Determina el título del slogan
const selectSlogan = (param) => {
	switch(param){
		case "blog":
			return "Un blog sobre las últimas tendencias en inversiones digitales y Real Estate";
		case "aprende":
			return "Aprende sobre las últimas tendencias en inversiones digitales y Real Estate";
		case "":
			return "Aprende sobre las últimas tendencias en inversiones digitales y Real Estate";
		default:
			return ""
	}
}


const selectType = (param) => {
	switch(param){
		case "blog":
			return "artículo";
		case "aprende":
			return "curso";
		case "":
			return "curso";
		default:
			return ""
	}
}

export {selectTitle,selectSlogan,selectType}