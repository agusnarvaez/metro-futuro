
//* REACT-HELMET
import { Helmet } from 'react-helmet';

export default function HelmetData({metaData}) {

    return (
        <Helmet>
            <title>Metro Futuro | {metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta name="keywords" content={metaData.keywords} />
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={`Metro-Futuro | ${metaData.title}`}/>
            <meta property="og:image" content="/public/assets/images/icons/metroFuturoLogoTag.png"/>
            <meta property="og:image:alt" content="Logo Metro Futuro"/>
            <meta property="og:description" content={metaData.description}/>
            <meta property="og:site_name" content="Metro Futuro"/>
        </Helmet>
    )
}