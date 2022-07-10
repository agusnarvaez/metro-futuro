import React from "react";

import HomeFaqPrincipal from "./HomeFaqPrincipal";

import HomeFaqHidden from "./HomeFaqHidden";

function HomeFaq() {
    
return (
    
    <section className="sectionInfo" id="homeFaq">

        {/**Título**/}
        <h3>Preguntas frecuentes</h3>

        <HomeFaqPrincipal/>

        <HomeFaqHidden/>

    </section>
    )
}
export default HomeFaq;