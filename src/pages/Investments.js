// COMPONENTS
import InvestmentsTitle from "../sections/Investments/InvestmentsTitle";
import InvestmentsList from "../sections/Investments/InvestmentsList";

export default function Investments({list,setList,investments,setInvestments}) {
   
    return (
        <main className="investmentsPage">
            <InvestmentsTitle />

            <InvestmentsList list={list} setList={setList} investments={investments} setInvestments={setInvestments} />
        </main>
    )
}