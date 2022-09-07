
//* REACT-HELMET
import { Helmet } from 'react-helmet';

export default function HelmetData({metaData}) {

    return (
        <Helmet>
            <title>Metro Futuro | {metaData.title}</title>

            <meta name="description" content={metaData.description} />
            <meta name="keywords" content={metaData.keywords} />

            
            <meta property="og:title" content={`Metro-Futuro | ${metaData.title}`}/>
            <meta property="og:description" content={metaData.description}/>
           
        </Helmet>
    )
}