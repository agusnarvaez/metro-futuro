import {articles} from '../client/client'

const reqApi = async(list,setList)=>{
    if(list.length===0){
        try{
            const api = await articles.getEntries()
            await setList(api.items)
            
        }catch(err){
            console.log("Error en la petición")
            console.log(err)
        }
    }
}

const filterItems = (list,setNewList)=>{
    if(list.length>0){
        const pathSplited = window.location.pathname.split('/')[1]
        const contentType = ()=>{
            switch(pathSplited){
                case "inmuebles": return "property"
                case "blog": return "blog"
                case "aprende": return "courses"
                default: return "property"
            }
        }
        const newFilteredList = list.filter(article=>article.sys.contentType.sys.id===contentType())
        setNewList(newFilteredList)
    }
}

export {reqApi,filterItems}