
// COMPONENTS
import HomeFaq from "../sections/Home/HomeFaq";
import HelmetData from "../components/HelmetData";

export default function Faq({metaData}) {

    return (

        <main className='faqPage'>
            <HelmetData metaData={metaData} />
            <HomeFaq/>
        </main>
    )
}
