//* ##### Página ADMIN ####
import {useEffect, useState} from 'react'

//* #### COMPONENTS ####
import HelmetData from "../components/HelmetData"
import AdminNav from "../sections/Admin/AdminNav"
import AdminEdition from '../sections/Admin/AdminEdition'

export default function Admin({metaData}) {
    const [navIndex,setNavIndex] = useState(0)

    const adminComponents = ["Artículos","Cursos","Propiedades"]
    
    useEffect(()=>{
        console.log(navIndex)
    },[navIndex])

    return (
        <main id="adminPage">
            
            <HelmetData metaData={metaData} />
            
            <h1>Admin</h1>

            <AdminNav navIndex={navIndex} setNavIndex={setNavIndex} />

            <AdminEdition content={adminComponents[navIndex]} />
            
        </main>
    )
}
