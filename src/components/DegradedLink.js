//* ### LINK DEGRADADO A PÁGINA EXTERIOR ###

export default function DegradedLink(props) {
    
    return (
        <div className="degradedLink" id={props.id}>
            <div className={`degradedLink_TextContainer degradedLink_TextContainer--${props.backgroundColor}`}>

                <a href={props.route} className="degradedLink_Text" target="_blank" rel="noreferrer">
                    {props.text}
                </a>

            </div>
        </div>
        
        )
}