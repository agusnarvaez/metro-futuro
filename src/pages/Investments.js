// COMPONENTS
import InvestmentsTitle from "../sections/Investments/InvestmentsTitle";
import InvestmentsList from "../sections/Investments/InvestmentsList";

export default function Investments({list,setList}) {
   
    return (
        <main className="investmentsPage">
            <InvestmentsTitle />

            <InvestmentsList list={list} setList={setList} />
        </main>
    )
}