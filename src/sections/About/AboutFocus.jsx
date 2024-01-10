// Componente
import AboutFocusCard from './AboutFocusCard'

// Background
import aboutFocusBg from "../../assets/img/background/aboutFocusBg.svg"


// Lista de tarjetas
import focusItems from '../../data/aboutFocusItems'

export default function AboutFocus() {
    return (

        <section id="aboutFocus">
            <h2 className='section_subTitle'>¿Cuál es nuestro foco?</h2>
            <div className='sectionInfo'>
                <ul>
                    {focusItems.map((item,key) => {
                        return(
                            <AboutFocusCard focus={item} key={key}/>
                        )
                    })}


                </ul>
            </div>
            <img alt="sectionBackground" title='sectionBackground' className="sectionBackground--desktop" src={aboutFocusBg} loading="lazy"/>
        </section>

    )
}