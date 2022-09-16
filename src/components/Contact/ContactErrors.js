export default function ContactErrors({fields}) {
 
    return (
        <div className="contactErrors">
            {
                fields.map((field, key) => { 
                    return (<p key={key} cla ssName={field.valid?"errorHidden":"errorShown"}>{field.error}</p>)
                })
            }
            
        </div>
    )
}