//* Importo Hooks y ReactGA (Google Anlytics)
import {useEffect} from "react";
import ReactGA from 'react-ga';
// COMPONENTS
import HomeFaq from "../sections/Home/HomeFaq";
import HelmetData from "../components/HelmetData";

export default function Faq({metaData}) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
      }, []);
    return (

        <main className='faqPage'>
            <HelmetData metaData={metaData} />
            <HomeFaq/>
        </main>
    )
}
