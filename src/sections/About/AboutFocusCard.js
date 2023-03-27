// Background

export default function AboutFocusCard({focus}) {
    
    return (
        <li>
            <div className='cardTitle'>
                <div className='cardTitle_Icon'>
                    <img alt="focusItemIcon" title="focusItemIcon" src={focus.icon} loading="lazy" />
                </div>
                <h3>{focus.title}</h3>
            </div>
            <p>{focus.text}</p>
        </li>       
    )
}