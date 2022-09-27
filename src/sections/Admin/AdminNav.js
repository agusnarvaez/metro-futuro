

export default function AdminNav({navIndex,setNavIndex}) {

	const navItems = ["Artículos","Cursos","Propiedades"]
	
	

	return (
		<ul className="admin_nav">
			{navItems.map((item,key)=>{ 
				return(
					<li 
						onClick={()=>setNavIndex(key)}
						key={key}
						className={navIndex===key?"activeNav":""}>
							{item}
					</li>
				)})}
		</ul>
	)
}