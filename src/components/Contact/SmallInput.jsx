import { useState, forwardRef } from "react";

const SmallInput = forwardRef(({ field, error, ...props }, ref) => {
  const [inputClass, setInputClass] = useState("inputContainer");

  const handleBlur = () => {
    if (!error) {
      setInputClass("inputContainer input--valid");
    } else {
      setInputClass("inputContainer input--invalid");
    }
  };

  return (
    <>
      <div className={inputClass}>
        <input
          className={field.class || ""}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          ref={ref} // Pasamos la ref que viene de react-hook-form
          {...props} // Añade las propiedades adicionales de react-hook-form
          onBlur={handleBlur}
        />
      </div>
      {error && <p className="errorShown">{field.error}</p>}
    </>
  );
});

export default SmallInput;
