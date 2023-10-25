//* ### LINK DEGRADADO A PÁGINA EXTERIOR ###

export default function DegradedLink({text,id,route,backgroundColor,inverted}) {

    return (
        <div className={inverted===true?"degradedLink degradedLink--inverted":"degradedLink"} id={id}>
            <div className={`degradedLink_TextContainer degradedLink_TextContainer--${backgroundColor}`}>

                <a href={route} className="degradedLink_Text" target="_blank" rel="noreferrer" title={text}>
                    {text}
                </a>

            </div>
        </div>

        )
}