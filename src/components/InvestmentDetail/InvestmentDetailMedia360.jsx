
export default function InvestmentDetailMedia({investment}) {

    const panoView = investment.url360View

    return (
            <div className="investmentDetailMedia360">
                <iframe title="investment360View" width="100%" height="640" frameBorder="0" allow="xr-spatial-tracking gyroscope accelerometer" allowFullScreen scrolling="no" src={panoView}/>
            </div>
    )
}