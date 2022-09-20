import AdminEditionForm from "../../components/Admin/AdminEditionForm"
import AdminEditionInfo from "../../components/Admin/AdminEditionInfo"

export default function AdminEdition({content}) {

	return (
		<section className="adminEdition">

			<AdminEditionInfo content={content}/>

			<AdminEditionForm content={content} />
			
		</section>
	)
}