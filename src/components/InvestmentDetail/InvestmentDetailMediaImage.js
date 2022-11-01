
export default function InvestmentDetailMediaImage({investment}) {
    const photos = investment? investment.photos : [];

    return (
            <div className="investmentDetailMediaImage">
                {/* photos ? photos.map((photo,index)=>(<img src={photo.fields.file.url} alt={photo.fields.title} key={index}/>)) : "" */}
                {photos ? <img src={photos[0].fields.file.url} alt={photos[0].fields.title} key={0}/>: ""}
            </div>
    )
}