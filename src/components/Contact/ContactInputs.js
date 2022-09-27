import SmallInput from "./SmallInput"
import LargeInput from "./LargeInput"

export default function ContactInputs({fields,handleChange}) {
    
    const inputs = fields.map((field,key) => {
        if(field.type !=="captcha"){
            return (<SmallInput key={key} field={field} handleChange={handleChange} />)
        } else if (field.type === "largeInput"){
            return (<LargeInput key={key} field={field} handleChange={handleChange}/>)
        }
    })
    return (
        <>
        {inputs}
        </>
    )
}