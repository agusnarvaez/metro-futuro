import React from 'react';
import { Link } from 'react-router-dom'
function Error404() {
    return (
        <React.Fragment>
            <main className="row">
                <h1>Error 404</h1><br></br>
                <Link to='/' className="nav-link" >Volver a Inicio</Link>
            </main>
        </React.Fragment>
    )
}
export default Error404;