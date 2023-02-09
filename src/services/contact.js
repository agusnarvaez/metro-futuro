
const fieldsList = [
    {
        name:"from_name",
        type:"inputContainer",
        class: "contactSmallInput",
        value:"",
        placeholder:"Nombre",
        isValid:false,
        showErrors:false,
        error:"Ingrese un nombre"
    },
    {
        name:"from_email",
        type:"inputContainer",
        class: "contactSmallInput",
        value:"",
        placeholder:"Email",
        isValid:false,
        showErrors:false,
        error:"Ingrese un email válido"
    },
    {
        name:"subject",
        type:"inputContainer",
        class: "contactSmallInput",
        value:"",
        placeholder:"Asunto",
        isValid:false,
        showErrors:false,
        error:"Ingrese un asunto"
    },
    {
        name:"message",
        type:"inputContainer",
        class: "largeInput",
        value:"",
        placeholder:"¿Porque deseas contactarte?",
        isValid:false,
        showErrors:false,
        error:"Ingrese un mensaje"
    },
    {
        name:"captcha",
        type:"captcha",
        class:"recaptcha",
        value:"",
        isValid:false,
        showErrors:false,
        error:"Por favor, verifique que no es un robot"
    }
]

//* Campos de EmailJS
const frmContact = {
    from_name: '',
    from_email: '',
    phone: '',
    subject: '',
    message: '',
    attachment: ''
}


export {fieldsList,frmContact}