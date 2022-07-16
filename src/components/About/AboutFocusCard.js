import React from 'react';

// Background


function AboutFocusCard(props) {
    const focus=props.focus;
    return (
        <li>
            <div className='cardTitle'>
                <div className='cardTitle_Icon'>
                    <img alt="focusItemIcon" src={focus.icon} />
                </div>
                <h3>{focus.title}</h3>
            </div>
            <p>{focus.text}</p>
        </li>       
    )
}
export default AboutFocusCard;