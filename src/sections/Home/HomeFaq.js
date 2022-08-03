import React from "react";

import PrincipalFAQ from "../FAQ/PrincipalFAQ";

import HiddenFAQ from "../FAQ/HiddenFAQ";

function HomeFaq() {
    
return (
    
    <section className="sectionInfo" id="homeFaq">

        {/**Título**/}
        <h3>Preguntas frecuentes</h3>

        <PrincipalFAQ/>

        <HiddenFAQ/>

    </section>
    )
}
export default HomeFaq;