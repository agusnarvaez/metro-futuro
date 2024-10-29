import { useState } from "react"
import HeaderLink from "./HeaderLink"
import HeaderNavLink from "./HeaderNavLink"
import DegradedLink from "../DegradedLink"
import learnCourseVideoDownArrow from '../../assets/img/icons/learnCourseVideoDownArrow.svg'
import { Link } from "react-router-dom"
export default function HeaderNav({burgerMenu,setBurgerMenu}) {
    const [showCourses,setShowCourses] = useState(false)
    const links = [
        {
            title:"Home",
            to:"metro-futuro.com"
        },
        {
            title:"Inmuebles",
            to:"metro-futuro.com"
        },
        {
            title:"Quienes somos",
            to:"metro-futuro.com/nosotros"
        },
        {
            title:"Contacto",
            to:"metro-futuro.com/contacto"
        }
    ]



    return (

            <ul className={burgerMenu?"navigation hiddenMenu":"navigation"} >
                {links.map((link, key) => {
                    return(
                        <HeaderLink
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
                            <li><HeaderNavLink link={{title:'Blog', to:'/blog'}} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></li>
                            <div className={"degradedSeparator degradedSeparator--header"}/>
                            <li><HeaderNavLink link={{title:'Guía del inversor', to:'/guia-del-inversor'}} burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} /></li>
                        </ul>
                    </div>
                </li>
                <li className="login-button-li"><a href='https://app.metro-futuro.com/login'>INICIAR SESIÓN</a></li>
            </ul>
    )
}