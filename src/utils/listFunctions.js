import { getFullList } from "../client/client"
const emptyList = (list)=> list.length===0

const listHasItems = (list)=> list.length>0

const pathSplitted =()=>  window.location.pathname.split('/')[1]

const contentType = ()=>{
    switch(pathSplitted()){
        case "inmuebles": return "property"
        case "blog": return "blog"
        case "aprende": return "courses"
        default: return "property"
    }
}

const compareType = (article)=> article.sys.contentType.sys.id===contentType()

const newFilteredList =(list)=> list.filter(article=>compareType(article))

const filterItems = (list,setNewList)=>{
    if(listHasItems(list)){
        setNewList(newFilteredList(list))
    }
}
const lastItem = (list)=> list[list.length-1].fields
const existsFirstItem = (list)=> list[0]!==undefined

const compareItems=(itemA,itemB)=> itemA!==itemB

const setLastItem = (list,item,setItem)=>{
    if(listHasItems(list)){
        if(existsFirstItem(list)){
            if(compareItems(item,lastItem(list))){
                setItem(lastItem(list))
            }
        }else{
            throw new Error("Error en la petición")
        }
    }
}
const findItem = (list,param)=> list.find((item)=>item.fields.url===param)

const existsItem = (item,param)=> findItem(item,param)!==undefined

const itemHasEntries = (item)=> item!==undefined? Object.entries(item).length>0 :false

const selectItem = async (item,setItem,list,itemID,meta,setMeta) =>{
    await setItem(findItem(list,itemID).fields)
    if(itemHasEntries(item)&&meta.title===""){
        setMeta({
            ...meta,
            title: item.title,
            description:item.shortDescription,
        })
    }
}

const handleListItems = (list,setList,newList,setNewList,itemID,item,setItem,metaData,setMetaData,navigate)=>{
    getFullList(list,setList,newList,setNewList)
    if(listHasItems(newList)){
        if(existsItem(newList,itemID)){
            selectItem(item,setItem,newList,itemID,metaData,setMetaData)
        }else{
            console.log("El item no existe")
            navigate("/error")
        }
    }
}

export {handleListItems,itemHasEntries,filterItems,pathSplitted,emptyList,existsItem,listHasItems,setLastItem,findItem,selectItem}