
import investmentDetailMediaImage from "../../assets/img/icons/investmentDetailMediaImage.svg"
import investmentDetailMediaVideo from "../../assets/img/icons/investmentDetailMediaVideo.svg"
import investmentDetailMedia360 from "../../assets/img/icons/investmentDetailMedia360.svg"
export default function InvestmentDetailMediaNav({setIndex}) {

    return (
        <ul className="investmentDetailMediaNav">
            <li onClick={()=>setIndex(0)}><img src={investmentDetailMediaImage} alt="icono" />Fotos</li>
            <li className="investmentDetailMediaNavSeparator"></li>
            <li onClick={()=>setIndex(1)}><img src={investmentDetailMediaVideo} alt="icono" />Videos</li>
            <li className="investmentDetailMediaNavSeparator"></li>
            <li onClick={()=>setIndex(2)}><img src={investmentDetailMedia360} alt="icono" />360</li>
            <li className="investmentDetailMediaNavSeparator"></li>
            <li onClick={()=>setIndex(3)}><img src={investmentDetailMedia360} alt="icono" />Planos</li>
        </ul>
    )
}