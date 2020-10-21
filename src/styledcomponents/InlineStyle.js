import React from 'react'

function InlineStyle() {
    const mystyle = {
        color: 'cyan',
        fontSize: '22px'
    }
    return (
        <div>
            <h1 style={mystyle}>INLINE</h1>

        </div>
    )
}

export default InlineStyle
