//* ##### Página ADMIN ####
import {useEffect, useState} from 'react'

//* REDUX
import {useDispatch} from 'react-redux'
import {getPosts} from '../actions/posts'

//* #### COMPONENTS ####
import HelmetData from "../components/HelmetData"
import AdminNav from "../sections/Admin/AdminNav"
import AdminEdition from '../sections/Admin/AdminEdition'

export default function Admin({metaData}) {
    const dispatch = useDispatch()

    const [navIndex,setNavIndex] = useState(0)

    const adminComponents = ["Artículos","Cursos","Propiedades"]
    const elements = ["Post1","Post2","Post3"]
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])

    return (
        <main id="adminPage">
            
            <HelmetData metaData={metaData} />
            
            <h1>Admin</h1>

            <AdminNav navIndex={navIndex} setNavIndex={setNavIndex} />

            <AdminEdition components={adminComponents} elements={elements} navIndex={navIndex} />
            
        </main>
    )
}
