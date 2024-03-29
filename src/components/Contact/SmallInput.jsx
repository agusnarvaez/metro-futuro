import { useState } from "react"
export default function SmallInput({field,contact,setContact}) {

    const [inputClass,setInputClass] = useState("inputContainer")
    const checkEmail = (email)=>{
        if(email.includes("@")&&email.includes(".com")){
            field.isValid = true
        }else{
            field.isValid = false
        }
    }
    const handleChange = (event) => {

        const { name, value } = event.target
        setContact({ ...contact, [name]: value })
        event.target.value.length > 0 ?
            (field.name === "from_email") ?
                checkEmail(event.target.value)
            : field.isValid = true
        : field.isValid = false
    }

    const handleBlur = () => {
        if(field.isValid){
            setInputClass("inputContainer input--valid")
            field.showErrors = false
        }else{
            setInputClass("inputContainer input--invalid")
            field.showErrors = true
        }
    }
    return (
        <>
            <div className={inputClass} id={field.name}>
                <input
                    className={field.class}
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.type}
                    onChange={handleChange}
                    onFocus={()=>{setInputClass("inputContainer input--focus")}}
                    onBlur={handleBlur}
                    required
                    autoComplete="on"
                />
            </div>
            {field.showErrors?<p className="errorShown">{field.error}</p>:null}
        </>
    )
}