import { useState, forwardRef } from "react";

const LargeInput = forwardRef(({ field, error, ...props }, ref) => {
  const [inputClass, setInputClass] = useState("largeInput");

  const handleBlur = () => {
    if (!error) {
      setInputClass("largeInput input--valid");
    } else {
      setInputClass("largeInput input--invalid");
    }
  };

  return (
    <>
      <div className={inputClass} id="inputContainer">
        <textarea
          className={field.class || ""}
          id={field.name}
          name={field.name}
          placeholder={field.placeholder}
          onFocus={() => setInputClass("largeInput input--focus")}
          onBlur={handleBlur}
          ref={ref} // La referencia de react-hook-form
          {...props} // Incluye las propiedades adicionales de react-hook-form
          required
        />
      </div>
      {error && <p className="errorShown">{field.error}</p>}
    </>
  );
});

export default LargeInput;
