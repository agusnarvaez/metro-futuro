import {createClient} from 'contentful'
import credentials from '../credentials'
import {emptyList} from '../utils/listFunctions'
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
            console.log("Error en la petición")
            console.log(err)
        }
    }
}