import { useState } from "react";

import InvestmentDetailMediaContent from "../../components/InvestmentDetail/InvestmentDetailMediaContent";
import InvestmentDetailMediaNav from "../../components/InvestmentDetail/InvestmentDetailMediaNav";
export default function InvestmentDetailMedia({investment}) {

    const [index,setIndex] = useState(0)

    return (
        <section className="investmentDetailMedia">
            
            <InvestmentDetailMediaContent index={index} investment={investment}/>
            
            <InvestmentDetailMediaNav setIndex={setIndex}/>
            
        </section>
    )
}