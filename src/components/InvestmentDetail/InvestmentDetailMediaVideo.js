
export default function InvestmentDetailMedia({investment}) {
    const videos = investment.videos;
    console.log(videos[0].fields.file.url)
    return (
        <div className="investmentDetailMediaVideo">
            <video preload="auto" controls="on" src={videos[0].fields.file.url} />
        </div>    
    )
}