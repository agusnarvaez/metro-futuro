import { useState, forwardRef } from "react";
import './attachmentInput.css';

const AttachmentInput = forwardRef(({ field, error, onChange, ...props }, ref) => {
  const [fileName, setFileName] = useState("Subir archivo (PDF)");

  const handleFileChange = (event) => {
    const { files } = event.target;
    console.log("Archivo seleccionado:", files);  // Para debug
    if (files.length > 0) {
      setFileName(files[0].name);
    }

    // Si existe un onChange (pasado por react-hook-form), también se ejecuta
    if (onChange) {
      onChange(event);  // Ejecuta el onChange de react-hook-form
    }
  };

  return (
    <>
      <div className={fileName !== 'Subir archivo (PDF)' ? 'fileInputContainer fileInputContainer--success' : "fileInputContainer"}>
        <label htmlFor={field.name}>
          <span className="fileName">{fileName}</span>
          <i className={fileName !== 'Subir archivo (PDF)' ? 'fa fa-check' : "fa fa-upload"}></i>
        </label>
        <input
          id={field.name}
          name={field.name}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange} // Llama a tu propio handleFileChange
          ref={ref}  // Se conecta a react-hook-form
          {...props} // Incluye las propiedades adicionales de react-hook-form
          required
        />
      </div>
      {error && <p className="errorShown">{field.error}</p>}
    </>
  );
});

export default AttachmentInput;
