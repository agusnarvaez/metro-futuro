export default function ContactErrors({fields}) {
 
    return (
        <div className="contactErrors">
            {
                fields.map((field, index) => { 
                    return (<p className={field.valid?"errorHidden":"errorShown"}>{field.error}</p>)
                })
            }
            
        </div>
    )
}