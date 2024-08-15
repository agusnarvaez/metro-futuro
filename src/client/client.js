import {createClient} from 'contentful'
import credentials from '../credentials'
import {emptyList,filterItems} from '../utils/listFunctions'

export const articles = createClient({
    space: credentials.contentful.space,
    accessToken: credentials.contentful.accessToken
})

export const reqApi = async(list,setList)=>{
    if(emptyList(list)){
        try{
            const api = await articles.getEntries()
            await setList(api.items)

        }catch(err){
            console.error("Error en la petición reqApi",err)
        }
    }
}

export const getFullList = async (list,setList,newList,setNewList) =>{
    try{
        await reqApi(list,setList)
        if(newList.length===0){
            filterItems(list,setNewList)
        }
    }catch(err){
        console.error("Error en la petición getFullList",err)
    }
}


export const getFullListForSiteMap = async () =>{
    try{
        const api = await articles.getEntries()

        return api.items

    }catch(err){
        console.error("Error en la petición getFullListForSiteMap",err)
    }
}

export const filteredList = (list,path) => list.filter(article=>article.sys.contentType.sys.id===path)
