
//* REACT-HELMET
import { Helmet,HelmetProvider } from 'react-helmet-async'

export default function HelmetData({metaData}) {
    const isFound = metaData.title !== "Página no encontrada | Error 404"
    return (
        <HelmetProvider>
            <Helmet /* defer={true} */>
                <title>{metaData.title}</title>
                <meta property="og:title" content={`${metaData.title}`}/>

                {!isFound && <meta name="robots" content="noindex" /> }
                <meta name="keywords" content={metaData.keywords} />
                <meta name="description" content={metaData.description} />
                <meta property="og:description" content={metaData.description} />
                <link rel="canonical" href={metaData.canonical} />
            </Helmet>
        </HelmetProvider>
    )
}