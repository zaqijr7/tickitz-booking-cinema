/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';
import './SectionLeft.css'

function SectionLeft (props) {
  return (
    <div className={`container-timeline ${props.className}`}>
      {props.children}
    </div>
  )
}

export default SectionLeft;
