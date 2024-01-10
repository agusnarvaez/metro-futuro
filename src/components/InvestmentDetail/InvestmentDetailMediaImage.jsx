import InvestmentDetailMediaArrows from "./InvestmentDetailMediaArrows"

import {useEffect,useState} from "react"

export default function InvestmentDetailMediaImage({investment,images,objecFit}) {
    const [index,setIndex] = useState(0)

    useEffect(()=>{
    },[index,setIndex,images,investment])

    return (
            <div className="investmentDetailMediaImage">
                {images?<InvestmentDetailMediaArrows index={index} setIndex={setIndex} length={images.length-1}/>:""}
                {images?<img className={'object-fit-'+objecFit} src={images[index].fields.file.url} alt={images[index].fields.title} title={images[index].fields.title} key={0} loading="lazy"/>: ""}
            </div>
    )
}