// Claves de frontend: salen de .env.local en local y del secret BUILD_ENV en CI (bapps-workflows deploy-vps).
// ponytail: el sitio es demo de portfolio; EmailJS, reCAPTCHA, WhatsApp y la API de Metro Futuro no se usan.
const credentials = {
    contentful: {
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN
    },
    mapsKey: process.env.REACT_APP_MAPS_KEY
}

export default credentials
