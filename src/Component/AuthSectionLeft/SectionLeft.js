import React from 'react';
import './SectionLeft.css'

function SectionLeft(props){
    console.log(props.children);
    return (
            <div className={`container-timeline ${props.className}`}>
                {props.children}
            </div>
    )
}

export default SectionLeft;