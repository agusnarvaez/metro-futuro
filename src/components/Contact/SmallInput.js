export default function SmallInput({field,handleChange}) {
    return (
        <div className={field.type} id={field.type}>
            <input
                className={field.class}
                id="input"
                name={field.name}
                placeholder={field.placeholder}
                type="text"
                value={field.value}
                onChange={handleChange}
                onFocus={()=>{field.container=`${field.type} ${field.type}Focus`}}
                onBlur={()=>{field.container= field.type}}
                required
            />
        </div>
    )
}