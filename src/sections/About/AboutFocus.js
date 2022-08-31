// Componente
import AboutFocusCard from './AboutFocusCard';

// Background
import aboutFocusBg from "../../assets/img/background/aboutFocusBg.png";


// Lista de tarjetas
import focusItems from '../../data/aboutFocusItems';

export default function AboutFocus() {
    return (

        <section id="aboutFocus">
            <h2 className='section_subTitle'>¿Cuál es nuestro foco?</h2>
            <div className='sectionInfo'>
                <ul>
                    {focusItems.map((item,index) => {
                        return(
                            <AboutFocusCard focus={item}/>
                        )
                    })}
                    
                    
                </ul>
            </div>
            <img alt="sectionBackground" className="sectionBackground--desktop" src={aboutFocusBg} />
        </section>

    )
}