export default function LargeInput({field,handleChange}) {
    return (
        <div className={field.class} id="inputContainer">
                        <textarea
                            className={field.class}
                            id="input"
                            name={field.name}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={handleChange}
                            onFocus={()=>{field.container= "inputLargeContainer inputContainerFocus"}}
                            onBlur={()=>{field.container= "inputLargeContainer"}}
                            required
                        />
        </div>
    )
}