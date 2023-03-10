import {articles} from '../client/client'

const reqApi = async(list,setList)=>{
    if(list.length===0){
        const api = await articles.getEntries()
        setList(api.items)
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
                default: break
            }
        }
        const newFilteredList = list.filter(article=>article.sys.contentType.sys.id===contentType())
        setNewList(newFilteredList)
    }
}

export {reqApi,filterItems}