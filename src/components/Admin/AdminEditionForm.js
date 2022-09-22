export default function AdminEditionForm({content}) {
const handleSubmit = ()=>{
	console.log("SUBMIT")
}
	return (
		
		<section className="adminEdition_Form">
			<form autoComplete="off" noValidate onSubmit={handleSubmit()}>

			</form>
		</section>
	)
}