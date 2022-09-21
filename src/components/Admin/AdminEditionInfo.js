import Posts from "./Posts/Posts"

export default function AdminEditionInfo({components,setPostIndex}) {

	return (
		<section className="adminEdition_Info">
			Información
			<Posts/>
		</section>
	)
}