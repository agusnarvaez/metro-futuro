import InvestmentDetailMediaArrows from "./InvestmentDetailMediaArrows"

import {useEffect,useState,lazy, Suspense} from "react"
import LazyReactPlayer from "../LazyReactPlayer"
/* const ReactPlayer = lazy(() => import('react-player/lazy'))
 */
export default function InvestmentDetailMedia({investment}) {

    const [index,setIndex] = useState(0)
    const youTubeVideos = investment.youTubeVideos
    useEffect(()=>{
    },[index,setIndex,youTubeVideos,investment])


    return (
        <div className="investmentDetailMediaVideo">
            <InvestmentDetailMediaArrows index={index} setIndex={setIndex} length={youTubeVideos.length-1}/>

                <LazyReactPlayer
                        url={youTubeVideos[index]}
                        border-radius="30px"
                    />
        </div>
    )
}