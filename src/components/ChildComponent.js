import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            {/* <button onClick={props.greetParentHandler}>Greet Parent</button>  OR in order to pass param ex 'Child' */}
            <button onClick={() => props.greetParentHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
