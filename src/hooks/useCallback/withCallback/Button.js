import React from 'react'

function Button({ handleClick, children }) {
    console.log(`Rendering button ${children}`);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}


//memo make only re-render changed component
export default React.memo(Button)
