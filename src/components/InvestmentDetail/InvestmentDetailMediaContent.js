import { useEffect } from "react";

import InvestmentDetailMediaImage from "./InvestmentDetailMediaImage";
import InvestmentDetailMediaVideo from "./InvestmentDetailMediaVideo"
import InvestmentDetailMedia360 from "./InvestmentDetailMedia360"
export default function InvestmentDetailMediaContent({investment,index}) {


    const media = [
        <InvestmentDetailMediaImage investment={investment} />,
        <InvestmentDetailMediaVideo investment={investment} />,
        <InvestmentDetailMedia360 investment={investment}/>
    ]

    useEffect(()=>{
        console.log(index)
    },[index])
    return (
        <div className="investmentDetailMediaContent">
            {media[index]}
        </div>
    )
}