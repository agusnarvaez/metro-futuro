import React from 'react';

const HomeSlogan = React.forwardRef((props,ref) =>

     (
        <section ref={ref} className={'sectionInfo '+(props.scrollTransition) } id="homeSlogan">
                <h2>Invierte en España desde €100</h2>
        </section>
    )
)
export default HomeSlogan;
