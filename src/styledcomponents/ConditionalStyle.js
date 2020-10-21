import React from 'react'
import './CustomStylesheet.css'

function ConditionalStyle(props) {
    let className = props.primary ? "primary" : ""
    return (
        <div>
            <h2 className={className}>Only primary</h2>
            <h2 className={`${className} font-xl`}>Hello Conditional Style</h2>
        </div>
    )
}

export default ConditionalStyle
