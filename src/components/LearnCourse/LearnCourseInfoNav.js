export default function LearnCourseInfoNav({infoIndex,setInfoIndex}/* handleClick */) {

	const navItems = ["Descripción","Videos","Contenido Adicional"]

	return (
		<ul className="learnCoursePage_Nav">
			{navItems.map((item,key)=>{ 
				return(
					<li 
						onClick={()=>setInfoIndex(key)}
						key={key}
						className={infoIndex===key?"activeNav":""}>
							{item}
					</li>
				)})}
		</ul>
	)
}