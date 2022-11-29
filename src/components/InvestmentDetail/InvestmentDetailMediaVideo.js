import ReactPlayer from "react-player";
import InvestmentDetailMediaArrows from "./InvestmentDetailMediaArrows";

import {useEffect,useState} from "react";

export default function InvestmentDetailMedia({investment}) {

    const [index,setIndex] = useState(0);
    const videos = investment.videos;
    const youTubeVideos = investment.youTubeVideos;
    console.log(youTubeVideos.length)
    console.log(videos[0].fields.file.url)
    useEffect(()=>{
    },[index,setIndex,youTubeVideos,investment])

    
    return (
        <div className="investmentDetailMediaVideo">
            <InvestmentDetailMediaArrows index={index} setIndex={setIndex} length={youTubeVideos.length-1}/>
            <ReactPlayer
                        className="youTubeVideo_Player"
                        url={youTubeVideos[index]}
                        controls
                        width="100%"
                        height="100%"
                        border-radius="30px"
                        border="none"  
                    />
        </div>    
    )
}