import React from 'react';

const HomeSlogan = React.forwardRef(({scrollTransition,ref}) =>

     (
        <section ref={ref} className={'sectionInfo '+(scrollTransition) } id="homeSlogan">
                <h2>Invierte en España desde €100</h2>
        </section>
    )
)
export default HomeSlogan;
