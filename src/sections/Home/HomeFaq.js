import React from "react";

import PrincipalFAQ from "../FAQ/PrincipalFAQ";

import HiddenFAQ from "../FAQ/HiddenFAQ";

export default function HomeFaq() {
    
return (
    
    <section className="sectionInfo" id="homeFaq">

        {/**Título**/}
        <h2>Preguntas frecuentes</h2>

        <PrincipalFAQ/>

        <HiddenFAQ/>

    </section>
    )
}