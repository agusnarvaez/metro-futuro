//* ### LINK DEGRADADO A PÁGINA EXTERIOR ###

export default function DegradedLink({text,id,route,backgroundColor}) {
    
    return (
        <div className="degradedLink" id={id}>
            <div className={`degradedLink_TextContainer degradedLink_TextContainer--${backgroundColor}`}>

                <a href={route} className="degradedLink_Text" target="_blank" rel="noreferrer">
                    {text}
                </a>

            </div>
        </div>
        
        )
}