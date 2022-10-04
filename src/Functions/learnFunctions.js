//* Obtiene la url para saber los tipos de cursos
const path = window.location.pathname.slice(1)

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
		case "learn": 
			return "Aprendé";
		default:  
			return ""
	}
}

const pathSplited = window.location.pathname.split('/')[1]
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

export {selectTitle,selectSlogan,path,selectType,pathSplited}