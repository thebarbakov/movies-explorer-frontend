import React from "react";

import './Link.css'

export default function Link({ className, children, href, ...props }) {
  return (
    <a href={href ? href : '/#'} className={`link${className ? ' ' + className : ''}`}>
        {children}
    </a>
  );
}
