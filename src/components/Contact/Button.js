
import check from '../../assets/img/icons/check.svg';

export default function ContactInputs({buttonClass,setButtonClass}) {


    const buttonSelection = ()=>{
        switch(buttonClass){
            case "contactSubmit contactSubmit--loading": return (
                <button
                className={buttonClass}
                type="submit"
                >
                      {/*   <div className="contactSubmit--loading__center"></div> */}
                        <div className="contactSubmit--loading__rotation"></div>
                </button>
                    );
            case "contactSubmit degradedLink contactSubmit--success": return (
                <button
                className={buttonClass}
                type="submit"
                >
                    <div className="degradedLink_TextContainer">
                        <p>
                            <img alt="check" title="check" src={check}/>Enviado
                        </p>
                        </div>
                </button>)
            case "contactSubmit contactSubmit--error": return (
                <button
                className={buttonClass}
                >
                    <p>X ¡Ups! Ha habido un error</p>
                </button>);
        default: return (
            <button
                className={buttonClass}
                type="submit"
                >
                <div className="degradedLink_TextContainer degradedLink_TextContainer--white">
                    <p className="degradedLink_Text">Enviar</p>
                </div>
            </button>)
        }
    }
    return (
        <>
            {
                buttonSelection()
            }
        </>
    )
}