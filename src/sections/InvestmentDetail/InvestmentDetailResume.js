
//* Imágenes
import roomsIcon from "../../assets/img/icons/investmentDetailHome.svg"
import areaIcon from "../../assets/img/icons/investmentDetailArea.svg"
import garageIcon from "../../assets/img/icons/investmentDetailGarage.svg"
import bathsIcon from "../../assets/img/icons/investmentDetailBath.svg"

export default function InvestmentDetailResume({investment}) {
    
    const list = [
        {
            icon:roomsIcon,
            text: investment.rooms + " Ambiente" + (investment.rooms!==1?"s":"")
        },
        {
            icon:areaIcon,
            text: investment.area + " m2"
        },
        {
            icon:garageIcon,
            text: investment.garage + " Cochera" + (investment.garage!==1?"s":"")
        },
        {
            icon:bathsIcon,
            text: investment.bathrooms + " Baño"+ (investment.bathrooms!==1?"s":"")
        }
    ]
    return (
        <section className="investmentDetailResume">
            <ul>
                {list.map((item,index)=>(<li><img alt="iconoDeResumen" src={item.icon}/>{item.text}</li>))}
            </ul>
        </section>
    )
}