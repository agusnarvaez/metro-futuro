//* Obtiene la url para saber los tipos de cursos

const selectTitle = (param) => {
	switch(param){
		case "blog":
			return "artículo";
		case "learn": 
			return "curso";
		default:  
			return ""
	}
}

//* Determina el título del slogan
const selectSlogan = (param) => {
	switch(param){
		case "blog":
			return "Infórmate";
		case "aprende": 
			return "Aprendé";
		default:  
			return ""
	}
}


const selectType = (param) => {
	switch(param){
		case "blog":
			return "artículo";
		case "learn": 
			return "curso";
		default:  
			return ""
	}
}

export {selectTitle,selectSlogan,selectType}