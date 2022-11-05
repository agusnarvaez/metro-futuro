import InvestmentDetailMediaArrows from "./InvestmentDetailMediaArrows";

import {useEffect,useState} from "react";

export default function InvestmentDetailMediaImage({investment}) {
    const photos = investment? investment.photos : "";
    //const [photos,setPhotos] = useState([])
    const [index,setIndex] = useState(0);

    useEffect(()=>{
    },[index,setIndex,photos,investment])

    return (
            <div className="investmentDetailMediaImage">
                {photos?<InvestmentDetailMediaArrows index={index} setIndex={setIndex} length={photos.length-1}/>:""}
                {photos? <img src={photos[index].fields.file.url} alt={photos[index].fields.title} key={0}/>: ""}
                {/* photos ? photos.map((photo,index)=>(<img src={photo.fields.file.url} alt={photo.fields.title} key={index}/>)) : "" */}
            </div>
    )
}