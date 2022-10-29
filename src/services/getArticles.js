import {articles} from '../client/client'

const reqApi = async(list,setList)=>{

    if(list.length===0){
        const pathSplited = window.location.pathname.split('/')[1]

        const contentType = ()=>{
            switch(pathSplited){
                case "investments": return "property"
                case "blog": return "blog"
                case "course": return "courses"
                default: break
            }
        }
        const api = await articles.getEntries()
        const investmentApi = await api.items.filter(article=>article.sys.contentType.sys.id===contentType())
        setList(investmentApi)
    }
}

export default reqApi