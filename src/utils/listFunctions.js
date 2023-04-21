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

export {filterItems,pathSplitted,emptyList}