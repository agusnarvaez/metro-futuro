//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react";
import ReactGA from 'react-ga';

// COMPONENTS
import InvestmentsTitle from "../sections/Investments/InvestmentsTitle";
import InvestmentsList from "../sections/Investments/InvestmentsList";
import HelmetData from "../components/HelmetData"

export default function Investments({list,setList,investments,setInvestments,metaData}) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
      }, []);
    return (
        <main className="investmentsPage">
            <HelmetData metaData={metaData} />
            <InvestmentsTitle />

            <InvestmentsList list={list} setList={setList} investments={investments} setInvestments={setInvestments} />
        </main>
    )
}