import investmentDetailMediaLeftArrow from '../../assets/img/icons/investmentDetailMediaLeftArrow.svg';
import investmentDetailMediaRightArrow from '../../assets/img/icons/investmentDetailMediaRightArrow.svg';
export default function InvestmentDetailMediaArrows({index,setIndex,length}) {
    
    const bajarIndice = () => index > 0? setIndex(index-1) : setIndex(length)

    const subirIndice = () => index===length ? setIndex(0): setIndex(index+1)
    
    return (
        <ul className="investmentDetailMediaArrows">
            <li><div onClick={()=>bajarIndice()}><img src={investmentDetailMediaLeftArrow} alt="flecha izq" title='flecha izq' /></div></li>
            
            <li><div onClick={()=>subirIndice()}><img src={investmentDetailMediaRightArrow} alt="flecha der" title='flecha der'/></div></li>
        </ul>
    )
}