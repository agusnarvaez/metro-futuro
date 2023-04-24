import { useState } from "react"
export default function LargeInput({field,contact,setContact}) {
    const [inputClass,setInputClass] = useState("largeInput")

    const handleChange = (event) => {

        const { name, value } = event.target
        setContact({ ...contact, [name]: value })

        if(event.target.value.length > 0){
            field.isValid = true
        }else{
            field.isValid = false
        }
    }

    const handleBlur = () => {
        if(field.isValid){
            setInputClass("largeInput input--valid")
            field.showErrors = false
        }else{
            setInputClass("largeInput input--invalid")
            field.showErrors = true
        }
    }

    return (
        <>
            <div className={inputClass} id="inputContainer">
                <textarea
                    className={field.class}
                    id="input"
                    name={field.name}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    onFocus={()=>{setInputClass("largeInput input--focus")}}
                    onBlur={handleBlur}
                    required
                />
            </div>
            {field.showErrors?<p className="errorShown">{field.error}</p>:null}
        </>
    )
}