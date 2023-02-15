
import investmentDetailMediaImage from "../../assets/img/icons/investmentDetailMediaImage.svg"
/* import investmentDetailMediaVideo from "../../assets/img/icons/investmentDetailMediaVideo.svg"
import investmentDetailMedia360 from "../../assets/img/icons/investmentDetailMedia360.svg" */
import investmentDetailMediaBlueprints from "../../assets/img/icons/investmentDetailMediaBlueprints.svg"
export default function InvestmentDetailMediaNav({index,setIndex}) {

    return (
        <ul className="investmentDetailMediaNav">
            <li onClick={()=>setIndex(0)} className={index===0?"investmentDetailMediaNav--active":0}><img src={investmentDetailMediaImage} alt="icono" />Fotos</li>
            <li className="investmentDetailMediaNavSeparator"></li>
            <li onClick={()=>setIndex(1)} className={index===1?"investmentDetailMediaNav--active":0}><img src={investmentDetailMediaBlueprints} alt="icono" />Planos</li>
            {/* <li onClick={()=>setIndex(1)} className={index===1?"investmentDetailMediaNav--active":0}><img src={investmentDetailMediaVideo} alt="icono" />Videos</li>
            <li className="investmentDetailMediaNavSeparator"></li>
            <li onClick={()=>setIndex(2)} className={index===2?"investmentDetailMediaNav--active":0}><img src={investmentDetailMedia360} alt="icono" />360</li>
            <li className="investmentDetailMediaNavSeparator"></li> */}
        </ul>
    )
}