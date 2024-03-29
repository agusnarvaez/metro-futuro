// Background
import learnWithUsBg from "../../assets/img/background/homeLearnWithUsBg.svg"

// Visor de videos de Youtube
import DegradedLink from '../../components/DegradedLink'
import LazyReactPlayer from '../../components/LazyReactPlayer'

export default function HomeLearnWithUs() {

    return (

        <section id="homeLearnWithUs">
            <img className="sectionBackground--desktop" id="homeLearnWithUsBackground" alt="learnWithUsBackground" title="learnWithUsBackground" src={learnWithUsBg} loading="lazy"/>
            <div className="youTubeVideo_Container">
                <LazyReactPlayer url="https://www.youtube.com/embed/wX7HmpI8NsY?showinfo=0&enablejsapi=1" border-radius="30px" />
            </div>
            <div className="sectionInfo" id="homeLearnWithUs_Info">
                <h4>Aprendé con <font color="#004DFF">Metro Futuro</font></h4>
                <p>
                    Te ofrecemos una plataforma eLearning online y gratuita para formarse en inversiones inmobiliarias y la tecnología Blockchain.<br /><br />
                    Únete a la academia de Metro Futuro para lograr capitalizar tus ahorros y transformarte en un inversor del Real Estate, la industria con mayor seguridad y menor riesgo.
                </p>
                <DegradedLink route="https://www.youtube.com/channel/UCmiKhrSZxmtVFlz7wt1dcKw" id="homeLearnWithUs_Link" text="Ver más" backgroundColor="white"/>
            </div>
        </section>
    )
}