import { useEffect } from "react";

import InvestmentDetailMediaImage from "./InvestmentDetailMediaImage";
/* import InvestmentDetailMediaVideo from "./InvestmentDetailMediaVideo"
import InvestmentDetailMedia360 from "./InvestmentDetailMedia360" */
export default function InvestmentDetailMediaContent({investment,index}) {


    const media = [
        <InvestmentDetailMediaImage investment={investment} images={investment.photos} objecFit='cover'/>,
        /* <InvestmentDetailMediaVideo investment={investment} />,
        <InvestmentDetailMedia360 investment={investment}/>, */
        <InvestmentDetailMediaImage investment={investment} images={investment.blueprints} objecFit='contain'/>
    ]

    useEffect(()=>{
    },[index])
    return (
        <div className="investmentDetailMediaContent">
            {media[index]}
        </div>
    )
}