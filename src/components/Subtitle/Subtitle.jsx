import React from 'react'

import './Subtitle.css'

export default function Subtitle(props) {
  return (
    <h2 className={'subtitle' + ' ' + props.className}>{props.children}</h2>
  )
}
