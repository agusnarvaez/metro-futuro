import InvestmentDetailMediaArrows from "./InvestmentDetailMediaArrows";

import {useEffect,useState} from "react";

export default function InvestmentDetailMediaImage({investment,images}) {
    const [index,setIndex] = useState(0);

    useEffect(()=>{
    },[index,setIndex,images,investment])

    return (
            <div className="investmentDetailMediaImage">
                {images?<InvestmentDetailMediaArrows index={index} setIndex={setIndex} length={images.length-1}/>:""}
                {images?<img src={images[index].fields.file.url} alt={images[index].fields.title} key={0}/>: ""}
            </div>
    )
}