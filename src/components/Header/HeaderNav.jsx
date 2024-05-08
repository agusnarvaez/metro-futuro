import { useState } from "react"
import HeaderNavLink from "./HeaderNavLink"
import DegradedLink from "../DegradedLink"
import learnCourseVideoDownArrow from '../../assets/img/icons/learnCourseVideoDownArrow.svg'
export default function HeaderNav({burgerMenu,setBurgerMenu}) {
    const [showCourses,setShowCourses] = useState(false)
    const links = [
        {
            title:"Home",
            to:"/"
        },
        {
            title:"Inmuebles",
            to:"/inmuebles"
        },
        {
            title:"Quienes somos",
            to:"/sobre-nosotros"
        },
        {
            title:"Blog",
            to:"/blog"
        },
        {
            title:"Contacto",
            to:"/contacto"
        }
    ]



    return (

            <ul className={burgerMenu?"navigation hiddenMenu":"navigation"} >
                {links.map((link, key) => {
                    return(
                        <HeaderNavLink
                            index={key} key={key}
                            link={link} links={links}
                            burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}
                        />
                )})}
                <li className={`academy-accordion ${showCourses?'show':''}`} onClick={()=>{setShowCourses(!showCourses)}}>
                    <span>
                        <p>Academia</p>
                        <img className={!showCourses?"videoArrow":"videoArrow videoArrow--rotated"}  alt="downArrow" title="downArrow" src={learnCourseVideoDownArrow} loading="lazy"/>
                    </span>
                    <div className="accordion-container">
                        <ul>
                            <li><HeaderNavLink link={{title:'Cursos On-demand', to:'/aprende'}} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></li>
                            <div className={"degradedSeparator degradedSeparator--header"}/>
                            {/* <li><HeaderNavLink link={{title:'Blog', to:'/blog'}} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></li>
                            <div className={"degradedSeparator degradedSeparator--header"}/> */}
                            <li><HeaderNavLink link={{title:'Guía del inversor', to:'/guia-del-inversor'}} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></li>
                        </ul>
                    </div>
                </li>
                <li className="login-button-li"><DegradedLink  text="Iniciar sesión" route='https://app.metro-futuro.com/login' backgroundColor="" id="login-button" inverted={true} /></li>
            </ul>
    )
}