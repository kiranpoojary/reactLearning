import React, { useState } from 'react'
import HookMouse from './HookMousePosition'

function UseEffectWithCleanup() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>
                Toggle Display </button>
            {display && < HookMouse />}


        </div>
    )
}

export default UseEffectWithCleanup
