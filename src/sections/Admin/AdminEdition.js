import {useEffect, useState} from 'react'

//* COMPONENTS
import AdminEditionForm from "../../components/Admin/AdminEditionForm"
import AdminEditionInfo from "../../components/Admin/AdminEditionInfo"

export default function AdminEdition({components,navIndex}) {
	const [postIndex,setPostIndex] = useState(0)
	return (
		<section className="adminEdition">
			
			<AdminEditionInfo components={components} setPostIndex={setPostIndex}/>

			<AdminEditionForm content={components[postIndex]} />
			
		</section>
	)
}